create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

create table genres (
  id serial primary key,
  tmdb_id integer unique not null,
  name text not null
);

create table movies (
  id uuid primary key default gen_random_uuid(),
  tmdb_id integer unique not null,
  title text not null,
  overview text,
  poster_path text,
  backdrop_path text,
  release_date date,
  runtime integer,
  vote_average numeric(3,1),
  video_url text, -- link to your hosted sample/demo video, nullable
  created_at timestamptz default now()
);

create table movie_genres (
  movie_id uuid references movies(id) on delete cascade,
  genre_id integer references genres(id) on delete cascade,
  primary key (movie_id, genre_id)
);

create table watchlist (
  user_id uuid references profiles(id) on delete cascade,
  movie_id uuid references movies(id) on delete cascade,
  added_at timestamptz default now(),
  primary key (user_id, movie_id)
);

create table history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  movie_id uuid references movies(id) on delete cascade,
  progress_seconds integer default 0,
  watched_at timestamptz default now()
);
