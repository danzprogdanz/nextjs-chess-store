import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { loginUser, registerUser, logoutUser, checkAuth, refreshToken } from '../store/thunks/authThunks';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  return {
    ...authState,
    login: (email: string, password: string) => dispatch(loginUser(email, password)),
    register: (fullName: string, email: string, password: string) => dispatch(registerUser(fullName, email, password)),
    logout: () => dispatch(logoutUser()),
    checkAuth: () => dispatch(checkAuth()),
    refreshToken: () => dispatch(refreshToken()),
  };
};