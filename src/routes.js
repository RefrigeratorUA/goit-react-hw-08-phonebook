import { lazy } from 'react';

// eslint-disable-next-line
export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    showInNav: true,
    component: lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */)),
    privat: false,
    restricted: false,
  },
  {
    name: 'Registration',
    path: '/register',
    exact: true,
    showInNav: false,
    component: lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */)),
    privat: false,
    restricted: true,
    redirectTo: '/contacts',
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    showInNav: false,
    component: lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */)),
    privat: false,
    restricted: true,
    redirectTo: '/contacts',
  },
  {
    name: 'Contacts',
    path: '/contacts',
    exact: true,
    showInNav: true,
    component: lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */)),
    privat: true,
    restricted: false,
    redirectTo: '/login',
  },
];
