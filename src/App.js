import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Wrapper = lazy(() => import("./components/Wrapper"));
const Portafolio = lazy(() => import("./components/Portafolio"));
const Sobremi = lazy(() => import("./components/Sobremi"));
const FormContact = lazy(() => import("./components/FormContact"));

const App = () => {
  const render = () => <p>Cargando ..</p>;
  return (
    <Router>
      <Suspense fallback={render()}>
        <div className="container">
          <main className="container-main">
            <Switch>
              <Route exact path="/" component={Wrapper} />
              <Route exact path="/sobremi" component={Sobremi} />
              <Route exact path="/portafolio" component={Portafolio} />
              <Route exact path="/contacto" component={FormContact} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <Header />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
