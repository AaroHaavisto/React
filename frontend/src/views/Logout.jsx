import {Navigate} from 'react-router';

const Logout = () => {
	localStorage.removeItem('token');

	return <Navigate to="/" replace />;
};

export default Logout;
