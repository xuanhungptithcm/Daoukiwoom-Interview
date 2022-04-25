import { lazy } from 'react';
import { AUTH_PATH } from '../components/routing/constants';

const routes = [
  {
    key: "b76e1a7c16e",
    path: AUTH_PATH.LOGIN_PAGE,
    component: lazy(() => import('../pages/auth/login/LoginPage')),
    requiredAuthen: false,
    exact: true,
    isAuthorized: false,
  },
  {
    key: "76e1a7c16e6",
    path: "/",
    component: lazy(() => import('../pages/auth/login/LoginPage')),
    requiredAuthen: false,
    exact: true,
    isAuthorized: false,
  },
  {
    key: "6e1a7c16e66",
    path: AUTH_PATH.SIGNUP_PAGE,
    component: lazy(() => import('../pages/auth/signup/SignUpPage')),
    requiredAuthen: false,
    exact: true,
    isAuthorized: false,
  },
  {
    key: "e1a7c16e667",
    path: '/dashboard',
    component: lazy(() => import('../pages/dashboard/Dashboard')),
    requiredAuthen: true,
    exact: true,
    isAuthorized: false,
  },
  {
    key: "1a7c16e6678",
    path: '*',
    component: lazy(() => import('../pages/not-found/NotFound')),
    requiredAuthen: false,
    exact: false,
    isAuthorized: false,
  },
];

export default routes;
