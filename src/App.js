import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

const Wrapper = lazy(() => import('./components/Wrapper'));
const Portafolio = lazy(() => import('./components/Portafolio'));
const Sobremi = lazy(() => import('./components/Sobremi'));

const App = () => {
  const render = () => <p></p>;

  return (
    <Router>
      <Suspense fallback={render()}>
        <div className='container'>
          <main className='container-main'>
            <Switch>
              <Route exact path='/' component={Wrapper} />
              <Route path='/sobremi' component={Sobremi} />
              <Route path='/portafolio' component={Portafolio} />
            </Switch>
          </main>
          <Header />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
