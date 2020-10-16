import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/atoms/PageLoader/PageLoader';

const Home = lazy(() => import('views/Home/Home'));
const Details = lazy(() => import('views/Details/Details'));

const MainRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route path="/movie/:id">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Suspense>
);

export default MainRoutes;
