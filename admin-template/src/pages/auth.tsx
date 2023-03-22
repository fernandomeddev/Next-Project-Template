/* eslint-disable @next/next/no-img-element */
import AuthInput from "@/components/auth/AuthInput";
import { ErrorIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";

export default function Authentication() {
    const image = process.env.LOGIN_PAGE_IMAGE_ID

    const { register, login, user, loginGoogle } = useAuth()

    const [error, setError] = useState('')
    const [mode, setMode] = useState<'login' | 'register' >('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // xs:hidden sm:hidden md:hidden lg:hidden xl:block w-1/2 lg:w-2/3
    // https://source.unsplash.com/fE42nRlBcG8/photos
    // https://source.unsplash.com/random

    function showError(msg:string, time = 5){
        setError(msg)
        setTimeout(() => setError(''), time * 1000)
    }

    async function submit(){
        try {
            if (mode === 'login') {
               await login(email, password)
            } else {
                await register(email, password)
            }
        } catch (error) {
           showError(error?.message ? error.message : 'Error unknow!')
        }
    }

    return (
    <div className="flex h-screen items-center justify-center">
        <div className="xs:hidden sm:hidden md:block md:w-2/3 lg:w-2/3">
            <img
                src={`https://source.unsplash.com/1Pmp9uxK8X8/photos`} alt="imagem da tela de altenticação"
                className="h-screem w-full"
             />
        </div>

        <div className="m-10  md:w-1/3 lg:w-1/3">
            <h1 className={`
                text-xl font-bold mb-5
            `}>
                {mode === 'login' ? 'Entrar' : 'Cadastre-se'}
            </h1>

            {error ? (
                <div className="
                flex item-center
                bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
                    {ErrorIcon}
                    <span className="ml-3">{error}</span>
                </div>
            ): false }
    
            <AuthInput 
                typeField="email"
                label={`Email`}
                value={email}
                changeValue={setEmail}
                requiredField
            />
    
            <AuthInput 
                typeField="password"
                label={`Senha`}
                value={password}
                changeValue={setPassword}
                requiredField
            />

            <AuthInput 
                typeField="password"
                label={`Confirme sua senha`}
                value={confirmPassword}
                changeValue={setConfirmPassword}
                requiredField
                notVisible={mode === 'login'}
            />

            <button onClick={submit} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                {mode === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className="my-6 border-gray-300 w-full" />

            <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3
            `}>
                Entrar com o Google
            </button>

            {mode === 'login' ? (
                <p className="mt-8">
                não possui cadastro? para se cadastrar <a className=" font-bold cursor-pointer hover:text-blue-700" onClick={() => setMode('register')}>clique aqui</a>
            </p>
            ): (
                <p className="mt-8">
                    já possui cadastro? para fazer o login <a className=" font-bold cursor-pointer hover:text-blue-700" onClick={() => setMode('login')}>clique aqui</a>
                </p>
            )}
    
        </div>
    </div>
        
    )
}