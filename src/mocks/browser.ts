import { setupWorker } from 'msw/browser';
import { authHandlers } from './handlers/auth.handlers';

export const worker = setupWorker(...authHandlers);

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: (req) => {
      // Properly type the request parameter
      const url = new URL(req.url);
      
      // Skip Next.js internal requests and static files
      if (
        url.pathname.startsWith('/_next/') ||
        url.pathname.includes('.') || // static files
        url.pathname.startsWith('/favicon.ico')
      ) {
        return;
      }
      
      console.warn('Unhandled request:', req.method, req.url);
    },
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  });
}