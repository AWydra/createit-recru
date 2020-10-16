import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Description.scss';

const Description = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <article className="desc pb-4">
      <h2 className="mt-5 mb-2 desc__heading">Descrpition</h2>
      <p className={`${!open && 'desc--hide'} desc__content`}>{children}</p>
      <div className="w-100 d-flex justify-content-end">
        <button type="button" className="btn btn-link" onClick={handleClick}>
          {open ? 'Less' : 'More'}
        </button>
      </div>
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
