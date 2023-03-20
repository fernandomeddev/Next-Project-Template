import { createContext, useState } from 'react'
import route from "next/router"
import firebase from '../../firebase/config'
import User from '@/model/User'

interface AuthContextProps {
    user: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFireBase: firebase.User): Promisse<User> {
    const token = await userFireBase.getIdToken()
    return {
        uid:  userFireBase.uid,
        name: userFireBase.displayName,
        email: userFireBase.email,
        token,
        provider: userFireBase.providerData[0]?.providerId,
        imageUrl: userFireBase.photoURL
    }
}

export function AuthProvider(props:AuthContextProps) {
    const [user, setUser] = useState<User>(null)
    
    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider
        )

        if(resp.user?.email) {
            const loggedUser = await normalizedUser(resp.user)
            setUser(loggedUser)
            console.log(loggedUser)
            route.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </ AuthContext.Provider>
    )
}

export default AuthContext