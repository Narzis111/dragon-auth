import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom" 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <> <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span></>
    }

    if(user){
        return children;
    }
    // user na thakle login page chole jabe
    return <Navigate state={location.pathname} to="/logins"></Navigate>
};

export default PrivateRoute;
