import React from 'react';
import PropTypes from 'prop-types';
import './HeadingListItem.scss';

const HeadingListItem = ({ primary, secondary }) => {
  return (
    <li className="list-group-item">
      <h5 className="mb-2">{primary}</h5>
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
