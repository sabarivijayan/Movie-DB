import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./movieCarousel.css";

function MovieCarousel({ movies }) {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      className="carouselDots"
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            style={{ width: "785px" }}
          />
          <p className="legend">{movie.title}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;