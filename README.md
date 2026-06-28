# Anime Tracker

Track your anime watchlist with ratings, favorites, and personalized recommendations.

## Features

- **Dashboard** — overview of watching, completed, planned, and dropped counts
- **Lists** — filterable, sortable lists by status (watching/completed/planned/dropped)
- **Search** — search anime via MyAnimeList (Jikan API)
- **Anime Details** — rate (0–10), track episodes, mark as favorite
- **Recommendations** — discover new anime based on your tracked list
- **Auth** — email/password signup and login via Supabase
- **Sync** — all data synced to Supabase, tied to your account
- **Force Updates** — old versions are prompted to download the latest APK
- **Themes** — light and dark mode with accent color picker
- **Multi-language** — English, Spanish, Japanese

## Tech

- [Expo](https://expo.dev) (React Native) — Android/iOS/Web
- [Supabase](https://supabase.com) — Auth + Database
- [Jikan API](https://jikan.moe) — Anime data from MyAnimeList
- [Zustand](https://github.com/pmndrs/zustand) — State management

## Development

```bash
npm install
npx expo start
```

## Building APK

```bash
npx eas build --platform android --profile preview
```

## Release

Push a tag to trigger automatic build and release via GitHub Actions:

```bash
# bump version in app.json + version.json
git commit -am "Bump to 1.0.1"
git tag v1.0.1 && git push origin main --tags
```
