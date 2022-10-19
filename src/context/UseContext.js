import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()

const UseContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const twitterProvider = new TwitterAuthProvider();
    const auth = getAuth(app);
    const createUser = (gmail, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, gmail, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const twitterLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterLogIn)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            return () => unSubscribe()
        })
    }, [])
    const authInfo = { user, loading, createUser, signIn, signOutUser, googleSign, twitterLogIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;