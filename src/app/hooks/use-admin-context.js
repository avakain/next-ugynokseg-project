import { useContext } from 'react';
import { AdminContext } from '@/context/AdminContext';

export default function useAdminContext() {
  return useContext(AdminContext);
}