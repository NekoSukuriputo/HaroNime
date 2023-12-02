import { JikanResponse, Anime, SeasonsClient } from "@/lib/jikan";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const client = new SeasonsClient();
    try {
        const res: JikanResponse<Anime[]> = await client.getSeasonNow();
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json(error)
    }
}
