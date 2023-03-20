import useAppData from "@/data/hook/useAppData"
import ChangeThemeButton from "./ChangeThemeButton"
import Title from "./Title"
import UserAvatar from "./UserAvatar"

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const {theme,  changeTheme} = useAppData()
    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className={`flex flex-grow justify-end items-center`}>
                <ChangeThemeButton theme={theme} ctxtheme={changeTheme} />
                <UserAvatar className={`ml-4`}></UserAvatar>
            </div>
        </div>
    )
}