import useUser from '../../../Hooks/useUser';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from "../Loading/Loading";

const RequireAuth = ({children}) => {
    const [user, loading] = useUser();
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;