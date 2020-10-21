import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Image.scss';
import coverPhoto from 'assets/cover.png';

const Image = ({ ...props }) => {
  const [show, setShow] = useState(true);

  const handleLoad = () => {
    setShow(false);
  };

  return (
    <>
      <LazyLoadImage effect="blur" afterLoad={handleLoad} {...props} />
      {show && <img src={coverPhoto} alt="" />}
    </>
  );
};

export default Image;
