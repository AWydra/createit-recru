import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Image.scss';

const Image = ({ ...props }) => <LazyLoadImage effect="blur" {...props} />;

export default Image;
