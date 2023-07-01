import { AuthContextProvider } from '@/app/context/AuthContext'
import { Provider } from '@/app/context/AdminContext'

export default function AdminLayout({
  children, // will be a page or nested layout
}) {
  return (
    <AuthContextProvider>
      <Provider>
        <section>
          {children}
        </section>
      </Provider>
    </AuthContextProvider>
  );
}