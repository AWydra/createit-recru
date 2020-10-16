import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from 'components/atoms/Image/Image';
import List from 'components/atoms/List/List';
import IconListItem from 'components/atoms/IconListItem/IconListItem';
import './MovieBox.scss';
import { CalendarEventFill, CashStack, TagFill } from 'react-bootstrap-icons';

const MovieBox = ({ id, category, image, title, price, date }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Link to={`/movie/${id}`} className="card movie overflow-hidden my-3">
        <Image className="movie__img" wrapperClassName="movie__img-container" src={image} />
        <div className="card-body p-2">
          <h3 className="movie--unbeakable h5">{title}</h3>
          <List>
            <IconListItem
              className="movie--unbeakable"
              icon={<CashStack />}
              label={`Price: ${price}`}
            />
            <IconListItem
              className="movie--unbeakable"
              icon={<TagFill />}
              label={`Category: ${category}`}
            />
            <IconListItem
              className="movie--unbeakable"
              icon={<CalendarEventFill />}
              label={`Date: ${date}`}
            />
          </List>
        </div>
      </Link>
    </div>
  );
};

MovieBox.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MovieBox;
