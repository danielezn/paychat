import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from '../scenes/layout/containers';
import NotFoundPage from '../scenes/others/containers';
import Home from '../scenes/home/containers';
import Dashboard from '../scenes/dashboard/containers';
import Talk from '../scenes/talk/containers';
import RequireAuth from '../scenes/authentication/containers/require-auth';

export const routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/talks">Charlas</Link></li>
        <li><Link to="/dashboard">Panel</Link></li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/talks" component={RequireAuth(Talk)} />
      <Route path="dashboard" component={RequireAuth(Dashboard)} />
      <Route path="*" component={NotFoundPage} />
    </div>
  </BrowserRouter>
);