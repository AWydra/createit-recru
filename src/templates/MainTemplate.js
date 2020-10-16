import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import generalServices from 'services/generalServices';
import MainRoutes from 'routes/MainRoutes';
import Navbar from 'components/organisms/Navbar/Navbar';
import Footer from 'components/organisms/Footer/Footer';
import './MainTemplate.scss';

const MainTemplate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(generalServices.getMovies());

    history.listen(() => window.scrollTo(0, 0));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <MainRoutes />
      </div>
      <Footer />
    </>
  );
};

export default MainTemplate;
