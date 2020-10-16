import React from 'react';
import PropTypes from 'prop-types';
import './IconListItem.scss';

const IconListItem = ({ icon, label, ...props }) => {
  return (
    <li {...props}>
      {icon}
      {label}
    </li>
  );
};

IconListItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconListItem;
