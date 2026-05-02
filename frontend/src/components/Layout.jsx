import {useEffect} from 'react';
import {Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import Navigation from './Navigation';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_88%,white_12%)] text-[var(--text)] shadow-[var(--shadow)]">
      <Navigation user={user} />

      <main className="flex-1 px-4 pb-6 pt-4 md:px-5 md:pb-6 md:pt-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
