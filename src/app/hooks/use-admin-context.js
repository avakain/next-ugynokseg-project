import { useContext } from 'react';
import { AdminContext } from '@/app/context/AdminContext';

export default function useAdminContext() {
  return useContext(AdminContext);
}