import NotFoundPage from '../scenes/others/containers';
import Home from '../scenes/home/containers';
import DashboardContainer from '../scenes/dashboard/containers';
import TalkContainer from '../scenes/talk/containers';
import RequireAuth from '../scenes/authentication/containers/require-auth';

export const routes = [
  {
    path: '/',
    component: Home,
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
    path: '*',
    component: NotFoundPage,
    exact: true
  },
];