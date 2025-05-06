import { AppDispatch } from '../store';
import { authService } from '../../services/auth/auth.service';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  setAuthState,
  registerStart,
  registerSuccess,
  registerFailure,
} from '../slices/authSlice';

export const loginUser = (email: string, password: string) => 
  async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    
    try {
      const { user, token } = await authService.login(email, password);
      localStorage.setItem('authToken', token);
      dispatch(loginSuccess({ user, token }));
    } catch (error) {
      const err = error as any;
      const errorMessage = err.response?.data?.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
      throw error;
    }
  };

  export const registerUser = (fullName: string, email: string, password: string) => 
    async (dispatch: AppDispatch) => {
      dispatch(registerStart());
      
      try {
        const { user, token } = await authService.register(fullName, email, password);
        localStorage.setItem('authToken', token);
        dispatch(registerSuccess({ user, token }));
      } catch (error) {
        const err = error as any;
        const errorMessage = err.response?.data?.message || 'Registration failed';
        dispatch(registerFailure(errorMessage));
        throw error;
      }
    };

export const logoutUser = () => 
  async (dispatch: AppDispatch) => {
    try {
      await authService.logout();
      localStorage.removeItem('authToken');
      dispatch(logoutSuccess());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

export const checkAuth = () => 
  async (dispatch: AppDispatch) => {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    
    try {
      const user = await authService.getCurrentUser();
      dispatch(setAuthState({ user, token }));
    } catch (error) {
      localStorage.removeItem('authToken');
      console.error('Session validation failed:', error);
    }
  };

export const refreshToken = () => 
  async (dispatch: AppDispatch) => {
    try {
      const { token } = await authService.refreshToken();
      localStorage.setItem('authToken', token);
      const user = await authService.getCurrentUser();
      dispatch(setAuthState({ user, token }));
    } catch (error) {
      localStorage.removeItem('authToken');
      console.error('Token refresh failed:', error);
    }
  };