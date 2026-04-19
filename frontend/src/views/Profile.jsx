import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const {getUserByToken} = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const userData = await getUserByToken(token);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [getUserByToken]);

  if (!user) {
    return <div>No user logged in</div>;
  }

  return (
    <section>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>User ID: {user.user_id}</p>
    </section>
  );
};
export default Profile;
