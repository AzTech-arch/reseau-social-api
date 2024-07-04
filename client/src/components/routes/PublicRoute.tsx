import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/friendzy" /> : <Outlet />;
};

export default PublicRoute;