// WhatsHot.js
import React, { useEffect, useState } from "react";
import MovieGrid from "./MovieGrid";

const API_KEY = "5c410db8c3cae04883900cb34551cc11";
const WHATS_HOT_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function WhatsHot() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchWhatsHot() {
      try {
        const response = await fetch(WHATS_HOT_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching What's Hot:", error);
      }
    }

    fetchWhatsHot();
  }, []);

  return (
    <div>
      <h2 style={{ marginLeft: "35px" }}>What's Hot</h2>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default WhatsHot;