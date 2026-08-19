# Movie Explorer --- Intermediate Phase

## Goal

Extend the Beginner version into a more realistic movie-discovery
product.

The focus of this phase is **managing more complex asynchronous state,
persistent client-side data, URL state, pagination, and caching**.

Start from the completed Beginner phase. Do not rewrite the application
unnecessarily.

------------------------------------------------------------------------

## Product Scope

### 1. Infinite Scrolling

Upgrade the search results experience:

-   Additional results should load as the user approaches the bottom.
-   Show a loading indicator while more results are loading.
-   Continue loading until the API has no more results.
-   Prevent duplicate movies.
-   Handle errors while loading additional pages.
-   Allow the user to retry a failed page load.

The user should not have to manually click "Next Page."

### 2. Search State in the URL

Make searches shareable.

For example:

`/search?q=batman`

Requirements:

-   The current search should be reflected in the URL.
-   Opening a search URL should reproduce the search.
-   Changing the search should update the URL.
-   Refreshing the page should preserve the search.
-   Browser back/forward navigation should behave sensibly.

### 3. Search History

Add a recent-search section.

Users should be able to:

-   See previous searches.
-   Select a previous search.
-   Repeat a previous search.
-   Clear search history.

Keep the history to a reasonable maximum, such as 10 searches.

### 4. Recently Viewed

Track movies the user opens.

Requirements:

-   Keep the most recent movies.
-   Limit the collection, for example to 10 movies.
-   Avoid duplicate entries.
-   Opening an existing movie should move it to the most-recent
    position.
-   The list should survive a browser restart.

### 5. Watchlist / Favorites

Add a watchlist.

Users should be able to:

-   Add a movie.
-   Remove a movie.
-   View all saved movies.
-   Open a saved movie's details.
-   See whether a movie is already saved.

Create a dedicated:

`/favorites`

page.

### 6. API Result Caching

Improve the experience when users revisit previously fetched data.

Examples:

-   Search for `Batman`.
-   Open a movie.
-   Search for something else.
-   Search for `Batman` again.

Previously fetched data should be reusable when appropriate rather than
always requiring another network request.

Apply the same principle to movie details.

### 7. Filters

Add useful search filters.

At minimum:

-   Content type:
    -   All
    -   Movies
    -   Series
    -   Episodes
-   Year-based filtering.

Changing filters should update the displayed results.

### 8. Debounced Search

Optionally allow the search experience to react to user input.

The product should avoid making a request for every individual
keystroke.

The search should remain responsive while limiting unnecessary API
requests.

### 9. Better Loading Experience

Improve the loading UI:

-   Skeleton movie cards for initial results.
-   Loading indicator for additional results.
-   Details-page skeleton.
-   Avoid unnecessary layout shifts.

### 10. Better Empty States

Add dedicated experiences for:

-   Empty watchlist.
-   Empty search history.
-   Empty recently viewed list.
-   No results after applying filters.

------------------------------------------------------------------------

## Suggested Milestones

### Milestone 1 --- Pagination / Infinite Scroll

Start with the existing search experience and add:

-   Page-based result loading.
-   Infinite scrolling.
-   End-of-results handling.
-   Additional loading/error states.

### Milestone 2 --- URL State

Add:

-   Search route.
-   Search query in URL.
-   Browser navigation support.

### Milestone 3 --- Persistent User Data

Add:

-   Watchlist.
-   Search history.
-   Recently viewed.

These should survive page refreshes/browser restarts.

### Milestone 4 --- Caching

Improve repeated searches and movie-detail navigation by reusing
previously fetched data.

### Milestone 5 --- Filters and Search UX

Add:

-   Filters.
-   Debounced search.
-   Improved loading and empty states.

------------------------------------------------------------------------

## Definition of Done

The Intermediate phase is complete when:

-   Search results load progressively.
-   Users don't need a "Next Page" button.
-   Search URLs can be shared.
-   Browser navigation works sensibly.
-   Watchlist persists.
-   Search history persists.
-   Recently viewed persists.
-   Repeated API requests are reduced through caching.
-   Filters work.
-   Loading/error/empty states are polished.
-   The application still feels responsive with a large number of
    accumulated results.

------------------------------------------------------------------------

## Concepts Practiced

-   Infinite scrolling
-   Pagination
-   URL state
-   Persistent client-side state
-   API caching
-   Async state management
-   Debounced search
-   Filtering
-   Browser history
-   More complex component state
-   Managing large result collections

------------------------------------------------------------------------

## Deliberately NOT Included

Leave these for the Advanced phase:

-   Virtualized rendering
-   Deep performance optimization
-   Large-scale rendering stress tests
-   Advanced cache invalidation strategies
-   Complex prefetching
-   Advanced performance measurement
