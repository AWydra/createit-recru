import React from 'react';
import { useSelector } from 'react-redux';
import MovieBox from 'components/molecules/MovieBox/MovieBox';

const Home = () => {
  const movies = useSelector((state) => state.response);

  return (
    <>
      <p className="h2 mb-5">Top 100 movies</p>
      <div className="row">
        {movies.map((movie) => (
          <MovieBox key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
