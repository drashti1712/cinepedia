# Movie Explorer --- Beginner Phase

## Goal

Build a working movie discovery application using the OMDb API.

The focus of this phase is **React fundamentals + API integration +
basic product structure**. Do not worry about caching, infinite
scrolling, virtualization, or advanced performance yet.

------------------------------------------------------------------------

## Product Scope

### 1. Home / Search Page

Build a home page where users can:

-   See a clear movie-search interface.
-   Enter a movie title.
-   Trigger a search.
-   See matching movies in a responsive grid.
-   See each movie's:
    -   Poster
    -   Title
    -   Release year
    -   Type
-   Search for another movie without refreshing the page.

### 2. Movie Details Page

When a user selects a movie:

-   Navigate to a dedicated movie-details page.
-   Display:
    -   Poster
    -   Title
    -   Year
    -   Genre
    -   Plot
    -   Director
    -   Actors
    -   Runtime
    -   IMDb rating
    -   Awards
    -   Language
    -   Country
-   Provide a way to return to the search experience.

### 3. Routing

Create the initial application routes:

-   `/`
    -   Home/search page
-   `/movie/:id`
    -   Movie details page

Refreshing a movie-details URL should keep the user on that movie.

### 4. Loading States

Every API-driven view should have a visible loading state.

Examples:

-   Loading search results.
-   Loading movie details.

### 5. Error States

Handle at least:

-   API/network failure.
-   Invalid/unsuccessful search.
-   Movie details failure.

Provide a clear retry action where appropriate.

### 6. Empty States

Handle:

-   No search performed yet.
-   Search returns no movies.

### 7. Responsive UI

The application should work reasonably on:

-   Desktop
-   Tablet
-   Mobile

------------------------------------------------------------------------

## Suggested Milestones

### Milestone 1 --- Project Setup

-   Create the React application.
-   Set up the basic page structure.
-   Create a reusable movie-card component.
-   Add basic styling.

### Milestone 2 --- Search

-   Build the search UI.
-   Connect it to OMDb.
-   Display results.
-   Handle loading, error, and empty states.

### Milestone 3 --- Movie Details

-   Add the movie details route.
-   Fetch details for the selected movie.
-   Display the details page.

### Milestone 4 --- Polish

-   Improve responsive layouts.
-   Add proper empty/loading/error experiences.
-   Clean up component boundaries.
-   Test the main user flows.

------------------------------------------------------------------------

## Definition of Done

The Beginner phase is complete when a user can:

1.  Open the application.
2.  Search for a movie.
3.  See search results.
4.  Open a movie.
5.  View its details.
6.  Navigate back.
7.  Search again.
8.  Use the application on a smaller screen.
9.  Understand what is happening during loading or errors.

------------------------------------------------------------------------

## Concepts Practiced

-   React componentization
-   State management
-   Controlled inputs
-   API fetching
-   Async UI
-   Loading states
-   Error handling
-   Empty states
-   Routing
-   URL parameters
-   Responsive design

------------------------------------------------------------------------

## Deliberately NOT Included

Do not implement these yet:

-   Infinite scrolling
-   Virtualization
-   API caching
-   Search history
-   Recently viewed
-   Watchlist persistence
-   Debounced search
-   Advanced filtering
-   Performance optimization

The goal is to finish this phase cleanly before adding complexity.
