import { GoogleAuthProvider, OAuthProvider, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config';
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [userLoading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const microsoftProvider = new OAuthProvider('microsoft.com');
        
    useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false)
        })

    return unsubscribe;
    }, []);

    async function signup(email, password){
    //   implement logic here and remove throw below
    throw "Sign up functionality not found"
    }

    async function login(email, password){
        // implement logic here and remove throw below
        throw "Login functionality not found"
    }

    async function logout(){
        return await signOut(auth);
    }

    async function signInWithGoogle(){
        // implement logic here and remove throw below
        throw "Sign up functionality not found"
    }

    async function signInWithMicrosoft(){
        // implement logic here and remove throw below
        throw "Sign up functionality not found"
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        signInWithGoogle,
        signInWithMicrosoft
    }

    return (
        <AuthContext.Provider  value={value}  >
            {userLoading ? <div className='text-center' >Loading</div> :  children}
        </AuthContext.Provider>
    )
}
