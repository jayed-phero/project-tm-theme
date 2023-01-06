import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Pages/Shared/Spinner/Spinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner/>
    }

    if(user && user.uid) {
        return children
    }

    return <Navigate to='/employeelogin' state={{from: location}} replace />
};

export default PrivateRoutes;