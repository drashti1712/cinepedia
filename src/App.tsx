import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.tsx";
import Watchlist from "./pages/Watchlist.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Homepage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
