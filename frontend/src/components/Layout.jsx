import {useEffect} from 'react';
import {Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import Navigation from './Navigation';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <>
      <Navigation user={user} />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
