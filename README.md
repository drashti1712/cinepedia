# Cinepedia

Cinepedia is a React + TypeScript movie discovery app built with Vite. It lets users browse popular and trending movies, view details, and explore similar titles.

## Features

- Movie browsing with a responsive layout
- Movie detail pages with poster, synopsis, and metadata
- Similar movie suggestions
- Search and navigation experience built with React Router
- Loading skeletons for a smoother UI

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
3. Add your TMDB API key to `.env`:
   ```bash
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Notes

- The `.env` file is intentionally ignored by Git.
- You will need a TMDB API key to fetch movie data.
- This project is ready to be pushed to GitHub after the local repository is initialized and the remote is added.
