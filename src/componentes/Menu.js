import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from '../App';
import Contacto from './Contacto';
import About from './About';


export default function Menu() {
  return (
    <Router>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>

    </Router>
  )
 
}
