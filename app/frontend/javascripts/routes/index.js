import NotFoundPage from '../scenes/others/containers';
import Home from '../scenes/home/containers';
import DashboardContainer from '../scenes/dashboard/containers';
import TalkContainer from '../scenes/talk/containers';
import RequireAuth from '../scenes/authentication/containers/require-auth';
import Login from '../scenes/authentication/containers/Login';
import Register from '../scenes/authentication/containers/Register';
import Logout from '../scenes/authentication/containers/Logout';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/talks',
    component: RequireAuth(TalkContainer),
    exact: true
  },
  {
    path: '/dashboard',
    component: DashboardContainer,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: true
  },
  {
    path: '/logout',
    component: Logout,
    exact: true
  },
  {
    path: '*',
    component: NotFoundPage,
    exact: true
  },
];