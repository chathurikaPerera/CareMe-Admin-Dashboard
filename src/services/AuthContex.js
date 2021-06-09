import React, { useContext, useState } from "react";
import firebase from '../Firebase.js';

const AuthContext = React.createContext()

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        
    }



    const value = {
        currentUser
    }
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

