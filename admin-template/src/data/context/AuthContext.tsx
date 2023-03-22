import { createContext, useEffect, useState } from 'react'
import route from "next/router"
import Cookies from "js-cookie"
import firebase from '../../firebase/config'
import User from '@/model/User'

interface AuthContextProps {
    user?: User
    register?: (email:string, password:string) => Promise<void>
    loading?: boolean
    login?: (email:string, password:string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFireBase: firebase.User): Promise<User> {
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

function setCookie(logged: string) {
    if(logged === 'authenticated') {
        Cookies.set('admin-template-medDev-auth', logged, { expires: 7 })
    } else {
        Cookies.remove('admin-template-medDev-auth')
    }
}

export function AuthProvider(props:AuthContextProps) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function setSession(userFireBase: firebase.User) {
        if(userFireBase?.email) {
            const user = await normalizedUser(userFireBase)
            setUser(user)
            setCookie('authenticated')
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            setCookie('non-authenticated')
            setLoading(false)
            return false
        }
    }

    async function register(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await setSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            await setSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }
    
    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider
            )
            await setSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await setSession(null)
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        if(Cookies.get('admin-template-medDev-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(setSession)
        return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            register,
            loading,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </ AuthContext.Provider>
    )
}

export default AuthContext