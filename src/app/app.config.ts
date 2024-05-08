import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withViewTransitions({
        onViewTransitionCreated: ({transition}) => {
          const router = inject(Router);
          const url = router.url;
          if (url && url.includes('9')) {
            transition.skipTransition();
          }
        },

      }),
      withComponentInputBinding()
    ),
    provideAnimations(),
    provideHttpClient()
  ],
};
