import Head from "next/head"
import useAuth from "@/data/hook/useAuth"
import router from "next/router"
import Image from "next/image"
import load from "../../../public/images/load.gif"

export default function AuthRequired(props) {
    const {user, loading } = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("admin-template-medDev-auth")) {
                                window.location.href = "/auth"
                            }
                        `
                    }}/>
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={load}/>
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/auth')
        return null
    }


}