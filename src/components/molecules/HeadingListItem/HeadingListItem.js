import React from 'react';
import PropTypes from 'prop-types';
import './HeadingListItem.scss';

const HeadingListItem = ({ primary, secondary }) => {
  return (
    <li className="list-group-item heading-list">
      <span className="h5 mb-2">{primary}</span>
      <p className="mb-1 heading-list__secondary">{secondary}</p>
    </li>
  );
};

HeadingListItem.defaultProps = {
  secondary: '',
};

HeadingListItem.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  secondary: PropTypes.any,
};

export default HeadingListItem;
