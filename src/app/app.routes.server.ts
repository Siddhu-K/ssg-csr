import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'test', renderMode: RenderMode.Prerender },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
