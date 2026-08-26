import Homepage from "./pages/Homepage.tsx";
import { Routes, Route } from "react-router";
import MovieDetails from "./pages/MovieDetails.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Homepage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
