import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();
    if (!admin || isLoading) {
        return <Spinner className="mt-5 d-block mx-auto" animation="grow" />
    }
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default AdminRoute;