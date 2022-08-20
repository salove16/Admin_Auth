import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
export const PrivateRoute = ({children}) => {
    const [token] = useCookies(["token"]);
    // console.log(token.token.role);

  return token.token.role==='admin' ? children : <Navigate to="/" />;
}


