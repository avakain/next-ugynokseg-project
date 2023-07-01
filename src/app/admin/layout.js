import SideBar from "./Sidebar";
import { AuthContextProvider } from '@/app/context/AuthContext'
import { usePathname } from 'next/navigation'
import { Provider } from '@/app/context/AdminContext'

export default function AdminLayout({
  children, // will be a page or nested layout
}) {
  return (
    <AuthContextProvider>
      <Provider>
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          {children}
        </section>
      </Provider>
    </AuthContextProvider>
  );
}