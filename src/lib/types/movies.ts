export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetail extends Movie {
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Companies[];
  production_countries: Countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Languages[];
  status: string;
  tagline: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Countries {
  iso_3166_1: string;
  name: string;
}

export interface Languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  id: number;
  results: Video[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
