import { useContext } from 'react';
import { AuthContext } from './../store/AuthProvider';

export default function useAuthCtx() {
  return useContext(AuthContext);
}
