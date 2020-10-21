// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieBox from 'components/molecules/MovieBox/MovieBox';
import shuttleArr from 'utils/shuttleArr';

const SimilarMovies = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const storeMovies = useSelector((state) => state.response);

  useEffect(() => {
    if (!storeMovies.length) return;

    const { category } = storeMovies.filter((movie) => movie.id === id)[0];
    const movies = [...storeMovies];
    const seletedMovies = shuttleArr(movies)
      .filter((movie) => movie.id !== id && movie.category === category)
      .slice(0, 6);
    setMovies(seletedMovies);
  }, [storeMovies, id]);

  return (
    <section>
      <h2 className="mt-5 mb-2 desc__heading">Similar Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <MovieBox key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default SimilarMovies;
