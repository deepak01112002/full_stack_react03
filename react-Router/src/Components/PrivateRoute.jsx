
import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let isLogin = 4;
  return (
      true ? children : <Navigate to="/login"/>
  )
}

export default PrivateRoute

