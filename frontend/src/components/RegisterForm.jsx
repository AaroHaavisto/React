import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

export const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {
    email: '',
    username: '',
    password: '',
  };

  const doRegister = async formValues => {
    try {
      const registerResult = await postUser(formValues);
      console.log(registerResult);
    } catch (error) {
      console.error(error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            id="registeremail"
            name="email"
            type="email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            id="registeruser"
            name="username"
            type="text"
            autoComplete="username"
            value={inputs.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            id="registerpassword"
            name="password"
            type="password"
            autoComplete="new-password"
            value={inputs.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
