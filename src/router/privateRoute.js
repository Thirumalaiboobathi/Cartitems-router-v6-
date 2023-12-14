import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from './routes';

const PrivateRoute = (props) => {

    const isLoggedIn = () => {
        if (localStorage.getItem("auth_token")) {
            return true;
        } else {
            return false;
        }
    };


    if (isLoggedIn()) {
        return props.children
    } else {
        return <Navigate
            to={AppRoutes.login}
            state={{ from: props.path }}
        />
    }

}

export default PrivateRoute;