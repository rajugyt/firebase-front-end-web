import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// export function PrivateRoute({component: Component, ...rest}){
    

//   return (
//      <Route
//         {...rest}
//         render={props=>{
//             return currentUser ? <Component {...props} /> : <Navigate to='/login' replace={true}/>
//         }}
//      ></Route>
//   )
// }


// import React from 'react'

export const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth();

    if(!currentUser){
        return <Navigate to='/login' /> 
    }
  return children;
}
