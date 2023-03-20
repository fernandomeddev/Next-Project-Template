import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import useAppData from "@/data/hook/useAppData"

interface UserAvatarProps {
    className?: string
}


export default function UserAvatar(props:UserAvatarProps) {
    const {theme,  changeTheme} = useAppData()
    const { user } = useAuth()

    return (
        <Link href={'/user_profile'}>
            { theme === 'dark' ? (
                <img src={user?.imageUrl ?? '/images/darkAvatar.svg'  } alt="Avatar do Usuário"
                className={`h-10 w-10 rounded-full cursor-pointer bg-white ${props.className}`}
                />
            ) : (
                <img src={user?.imageUrl ?? '/images/avatar.svg'  } alt="Avatar do Usuário"
                className={`h-10 w-10 rounded-full cursor-pointer bg-white ${props.className}`}
            />
            )}
            
        </Link>
    )
}