import { Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    component: 'landing-page',
    action: async () => {
      await import('./pages/landing-page.js');
    },
  },
  { path: '(.*)', redirect: '/' },
];
