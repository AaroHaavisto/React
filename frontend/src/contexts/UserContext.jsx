import {createContext, useCallback, useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {useAuthentication, useUser} from '../hooks/apiHooks';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = useCallback(
    async credentials => {
      try {
        const loginResult = await postLogin(credentials);
        const token = loginResult?.token;

        if (!token) {
          throw new Error('Login failed: token missing');
        }

        localStorage.setItem('token', token);

        const userResult = await getUserByToken(token);
        setUser(userResult.user ?? userResult);

        navigate('/');
      } catch (e) {
        console.log(e.message);
        throw e;
      }
    },
    [getUserByToken, navigate, postLogin]
  );

  const handleLogout = useCallback(() => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }, [navigate]);

  const handleAutoLogin = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user ?? userResult);

        navigate(location.pathname);
      }
    } catch (e) {
      console.log(e.message);
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [getUserByToken, location.pathname, navigate]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        handleAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
