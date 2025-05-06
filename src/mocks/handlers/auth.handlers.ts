// src/mocks/handlers/auth.handlers.ts
import { http, HttpResponse, delay } from 'msw';
import { AuthResponse, User } from '@/types/auth.types';

const mockUser: User = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
};

export const authHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };
    console.log('Intercepted login request', email, password);
    await delay(150);
  
    if (email === 'test@example.com' && password === 'password') {
      return HttpResponse.json({
        user: mockUser,
        token: 'mock-jwt-token',
      } as AuthResponse);
    }
  
    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  http.post('/api/auth/register', async ({ request }) => {
    try {
      const { fullName, email, password } = await request.json() as { 
        fullName: string; 
        email: string; 
        password: string 
      };
      
      console.log('Intercepted register request', fullName, email, password);
      
      await delay(150);
  
      // Add validation if needed
      if (!email || !password || !fullName) {
        return HttpResponse.json(
          { message: 'All fields are required' },
          { status: 400 }
        );
      }
  
      // You could add more validation here (email format, password strength, etc.)
  
      return HttpResponse.json({
        user: mockUser,
        token: 'mock-jwt-token',
      } as AuthResponse);
  
    } catch (error) {
      console.error('Error handling register request:', error);
      return HttpResponse.json(
        { message: 'Internal server error' },
        { status: 500 }
      );
    }
  }),

  http.post('/api/auth/logout', async () => {
    await delay(100);
    return HttpResponse.json({ success: true });
  }),

  http.get('/api/auth/me', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    await delay(100);

    if (authHeader === 'Bearer mock-jwt-token') {
      return HttpResponse.json(mockUser);
    }

    return HttpResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }),

  http.post('/api/auth/refresh', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    await delay(100);

    if (authHeader === 'Bearer mock-expired-token') {
      return HttpResponse.json({ token: 'mock-jwt-token' });
    }

    return HttpResponse.json(
      { message: 'Invalid refresh token' },
      { status: 401 }
    );
  }),
];