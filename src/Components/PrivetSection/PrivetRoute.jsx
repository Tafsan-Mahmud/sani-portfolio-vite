import React, { useContext } from 'react';
import { AuthUser } from '../../App';
import { Redirect, Route, useLocation } from 'react-router-dom/cjs/react-router-dom';



const PrivetRoute = ({ children, ...rest }) => {

    const [authUser, setAuthUser] = useContext(AuthUser);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            authUser.marlin || localStorage.getItem('diersu') ? (
                    children
                ) :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
            }

        />

    );
};

export default PrivetRoute;