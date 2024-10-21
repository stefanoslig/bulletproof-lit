import { Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    component: 'bpl-landing',
    action: async () => {
      await import('./pages/landing.js');
    },
  },
  {
    path: '/auth/register',
    component: 'bpl-register',
    action: async () => {
      await import('./pages/auth/register.js');
    },
  },
  {
    path: '/auth/login',
    component: 'bpl-login',
    action: async () => {
      await import('./pages/auth/login.js');
    },
  },
  {
    path: '(.*)',
    component: 'bpl-not-found',
    action: async () => {
      await import('./pages/not-found.js');
    },
  },
];
