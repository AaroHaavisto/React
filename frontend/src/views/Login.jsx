import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(prev => !prev);
  };

  return (
    <>
      {showRegister ? <RegisterForm /> : <LoginForm />}
      <button type="button" onClick={toggleForm}>
        {showRegister
          ? 'Already have an account? Login'
          : 'Need an account? Register'}
      </button>
    </>
  );
};

export default Login;
