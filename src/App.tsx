import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'config/router/routes';
import Goiburua from 'common/Goiburua';
import Oina from 'components/Oina';

function App() {
  return (
    <Router>
      <Goiburua />
      <Suspense fallback='Kargatzen...'>
        <Switch>
          {routes.map(({path, component: Component}) => (
            <Route path={path} component={Component} key={path} exact />
          ))}
        </Switch>
      </Suspense>
      <Oina />
    </Router>
  );
}

export default App;
