// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from 'components/atoms/Image/Image';
import HeadingListItem from 'components/molecules/HeadingListItem/HeadingListItem';
import Description from 'components/organisms/Description/Description';
import SimilarMovies from 'components/organisms/SimilarMovies/SimilarMovies';
import { Film } from 'react-bootstrap-icons';
import './Details.scss';

const Details = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const movies = useSelector((state) => state.response);

  useEffect(() => {
    if (!movies.length) return;

    const movie = movies.filter((movie) => movie.id === id);
    setMovie(movie[0]);
  }, [movies, id]);

  return (
    <>
      <article>
        <h2 className="mt-5 mb-3 desc__heading">About Movie</h2>
        <div className="row">
          <div className="img-column col-12 col-md-5 col-lg-4">
            <Image src={movie.image} alt={`${movie.title} movie poster`} />
          </div>
          <div className="col-12 col-md-7 col-lg-8">
            <ul className="list-group">
              <li className="list-group-item">
                <h1 className="h2 d-flex align-items-center mb-1 py-2">
                  <Film className="mr-3" />
                  {movie.title}
                </h1>
              </li>
              <HeadingListItem primary="Price" secondary={movie.price} />
              <HeadingListItem primary="Category" secondary={movie.category} />
              <HeadingListItem primary="Cast &amp; Crew" secondary={movie.artist} />
              <HeadingListItem primary="Release date" secondary={movie.date} />
              <HeadingListItem primary="Copyrights" secondary={movie.rights} />
              <HeadingListItem
                primary="Links"
                secondary={
                  movie.buttons &&
                  movie.buttons.map((button) => (
                    <a
                      key={button.title}
                      className="btn mt-1 mx-1"
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {button.title}
                    </a>
                  ))
                }
              />
            </ul>
          </div>
        </div>
      </article>
      <Description>{movie.desc}</Description>
      <SimilarMovies />
    </>
  );
};

export default Details;
