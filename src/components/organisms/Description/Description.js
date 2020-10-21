import React from 'react';
import PropTypes from 'prop-types';
import './Description.scss';

const Description = ({ children }) => {
  return (
    <article className="desc pb-4">
      <h2 className="mt-5 mb-2 desc__heading">Description</h2>
      <p className="desc__content">{children}</p>
    </article>
  );
};

Description.defaultProps = {
  children: '',
};

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Description;
