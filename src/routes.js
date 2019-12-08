import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./Components/Home'));
const DetailPage = lazy(() => import('./Components/DetailPage'));

const Routes = () => {
    return(
      <Suspense
        fallback={
          <div className="loaderContainer">
            <div className="loaderWrapper">
              <div className="loader">Loading...</div>
            </div>
          </div>
        }
      >
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/detail/:id' component={DetailPage} />
        </Switch>
      </Suspense>
    );
}

export default Routes;