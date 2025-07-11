import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import './index.css';
import './i18n';
import i18n from './i18n';
import router from './Router';
import extractToken from './utils/auth/extractToken';

const savedLang = localStorage.getItem('lang') || 'ko';
i18n.changeLanguage(savedLang);

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    extractToken();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col bg-[#FDFDFD] w-full max-w-[470px] mx-auto overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
