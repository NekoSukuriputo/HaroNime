import { BaseClient } from './base.client';
import { AnimeEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimeEpisodeVideo,
  AnimePicture,
  AnimeSearchParams,
  AnimeStaff,
  AnimeStatistics,
  AnimeVideos,
  JikanResponse,
  Recommendation,
} from '../models';

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
  /**
   * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getAnimeSearch(searchParams?: Partial<AnimeSearchParams>): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeSearch}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a complete Anime resource data
   * @param mal_id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeFullById(mal_id: number): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeFullById, { id: mal_id });
      this.api
        .get<JikanResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Anime resource data
   * @param mal_id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeById(mal_id: number): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeById, { id: mal_id });
      this.api
        .get<JikanResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Characters of a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeCharacter array data
   */
  public async getAnimeCharacters(mal_id: number): Promise<JikanResponse<AnimeCharacter[]>> {
    return new Promise<JikanResponse<AnimeCharacter[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeCharacters, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeCharacter[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeCharacter[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Staff of a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeStaff array data
   */
  public async getAnimeStaff(mal_id: number): Promise<JikanResponse<AnimeStaff[]>> {
    return new Promise<JikanResponse<AnimeStaff[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeStaff, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeStaff[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeStaff[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a list of all the episodes of a specific Anime
   * @param mal_id The Anime ID
   * @param page The page number
   * @returns JikanResponse with AnimeEpisode array data
   */
  public async getAnimeEpisodes(mal_id: number, page = 1): Promise<JikanResponse<AnimeEpisode[]>> {
    return new Promise<JikanResponse<AnimeEpisode[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeEpisodes, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeEpisode[]>>(endpoint, { params: { page } })
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisode[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a single Episode of a specific Anime by its ID
   * @param anime_mal_id The Anime ID
   * @param episode_mal_id The Episode ID
   * @returns JikanResponse with AnimeEpisode data
   */
  public async getAnimeEpisodeById(anime_mal_id: number, episode_mal_id: number): Promise<JikanResponse<AnimeEpisode>> {
    return new Promise<JikanResponse<AnimeEpisode>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeEpisodeById, {
        id: anime_mal_id,
        episode: episode_mal_id,
      });
      this.api
        .get<JikanResponse<AnimeEpisode>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisode>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeVideo data
   */
  public async getAnimeVideos(mal_id: number): Promise<JikanResponse<AnimeVideos>> {
    return new Promise<JikanResponse<AnimeVideos>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeVideos, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeVideos>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeVideos>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Episode Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @param page The page number
   * @returns JikanResponse with AnimeVideoEpisode array data
   */
  public async getAnimeEpisodeVideos(mal_id: number, page = 1): Promise<JikanResponse<AnimeEpisodeVideo[]>> {
    return new Promise<JikanResponse<AnimeEpisodeVideo[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeVideosEpisodes, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeEpisodeVideo[]>>(endpoint, { params: { page } })
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisodeVideo[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Pictures related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimePicture array data
   */
  public async getAnimePictures(mal_id: number): Promise<JikanResponse<AnimePicture[]>> {
    return new Promise<JikanResponse<AnimePicture[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimePictures, { id: mal_id });
      this.api
        .get<JikanResponse<AnimePicture[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimePicture[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Statistics related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeStatistics data
   */
  public async getAnimeStatistics(mal_id: number): Promise<JikanResponse<AnimeStatistics>> {
    return new Promise<JikanResponse<AnimeStatistics>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeStatistics, { id: mal_id });
      this.api
        .get<JikanResponse<AnimeStatistics>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeStatistics>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Recommendations related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with Recommendation array data
   */
  public async getAnimeRecommendations(mal_id: number): Promise<JikanResponse<Recommendation[]>> {
    return new Promise<JikanResponse<Recommendation[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(AnimeEndpoints.AnimeRecommendations, { id: mal_id });
      this.api
        .get<JikanResponse<Recommendation[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Recommendation[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
