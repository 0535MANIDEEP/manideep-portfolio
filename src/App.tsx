// ============================================================
// APP ROOT — Providers, Theme, Toastify
// ============================================================

import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './routes/AppRouter';
import PageLoader from './components/loaders/PageLoader';
import { useAppSelector } from './hooks/useRedux';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

function ThemeApplier() {
  const mode = useAppSelector((s) => s.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return null;
}

function AppContent() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <ThemeApplier />
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
