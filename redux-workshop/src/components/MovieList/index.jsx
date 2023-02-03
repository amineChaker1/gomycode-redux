import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import MovieCard from "../MovieCard";
export default function MovieList({ Movies, handleToggle }) {
  return (
    <>
      <h1>Movies</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Movies.map(
          (movie) =>
            movie.watched && (
              <SwiperSlide>
                <MovieCard handleToggle={handleToggle} {...movie} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
