import Link from "next/link"
import { render } from "react-dom"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    textClassName?: string
    onClick?: (event:any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function linkRender() {
        return (
            <span className={` flex flex-col justify-center items-center h-20 w-20 ${props.className}`}>
                {props.icon}
                <span className={`text-xs front-linght ${props.textClassName}`}>
                    {props.text}
                </span>
            </span>
        )
    }
    return (
        <li onClick={props.onClick} className={` hover:bg-blue-200 dark:hover:bg-gray-800 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url}>
                    {linkRender()}
                </Link>
            ) : (
                linkRender()
            )}
        </li>
    )
}