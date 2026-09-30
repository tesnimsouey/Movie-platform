alter table profiles enable row level security;
alter table watchlist enable row level security;
alter table history enable row level security;
alter table movies enable row level security;
alter table genres enable row level security;
alter table movie_genres enable row level security;

drop policy if exists "Movies are viewable by everyone" on movies;
drop policy if exists "Genres are viewable by everyone" on genres;
drop policy if exists "Movie genres are viewable by everyone" on movie_genres;
drop policy if exists "Profiles are viewable by everyone" on profiles;
drop policy if exists "Users can update own profile" on profiles;
drop policy if exists "Users can insert own profile" on profiles;
drop policy if exists "Users manage own watchlist" on watchlist;
drop policy if exists "Users manage own history" on history;

create policy "Movies are viewable by everyone" on movies for select using (true);
create policy "Genres are viewable by everyone" on genres for select using (true);
create policy "Movie genres are viewable by everyone" on movie_genres for select using (true);

create policy "Profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);

create policy "Users manage own watchlist" on watchlist for all using (auth.uid() = user_id);
create policy "Users manage own history" on history for all using (auth.uid() = user_id);