import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/redux/store";
import { JikanResponse, Anime, SeasonsClient } from "@/lib/jikan";

export interface SeasonNow {
  data: JikanResponse<Anime[]>;
  isLoading: boolean;
  error: string | null | Error;
}

const initialState: SeasonNow = {
  data: { data: [] },
  isLoading: false,
  error: null,
};

export const fetchSeasonNow = createAsyncThunk("seasonNow/fetch", async () => {
  const client = new SeasonsClient();
  const res: JikanResponse<Anime[]> = await client.getSeasonNow();
  return res;
});

export const seasonNowSlicer = createSlice({
  name: "seasonNow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeasonNow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchSeasonNow.fulfilled,
      (state, action: PayloadAction<JikanResponse<Anime[]>>) => {
        state.data = action.payload;
        state.error = null;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchSeasonNow.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error ? action.error.message : "An error occurred";
    });
  },
});

export default seasonNowSlicer.reducer