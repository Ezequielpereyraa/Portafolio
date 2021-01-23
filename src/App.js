import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProyectoState from "./context/ProyectoState";
import Header from "./components/Header";
import Nav from "./components/Header/Nav";

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
        <ProyectoState>
          <div className="container">
            <main className="container-main">
              <Nav />
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
        </ProyectoState>
      </Suspense>
    </Router>
  );
};

export default App;
