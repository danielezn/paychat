import React, { Component } from 'react';
import { routes } from '../../../routes';
import { BrowserRouter, Route, Link } from 'react-router-dom'


import NotFoundPage from '../../others/containers';
import Home from '../../home/containers';
import Dashboard from '../../dashboard/containers';
import Talk from '../../talk/containers';
import RequireAuth from '../../authentication/containers/require-auth';


export const App = () => {

  return (
    <div>
      <p>Header here</p>

      <div className="container">
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/talks">Charlas</Link></li>
              <li><Link to="/dashboard">Panel</Link></li>
            </ul>
            <Route path="/" component={Home} />
            <Route path="/talks" component={Talk} />
            <Route path="dashboard" component={RequireAuth(Dashboard)} />
            <Route path="*" component={NotFoundPage} />
          </div>
        </BrowserRouter>
      </div>

      <p>Footer here</p>
    </div>
  );
}