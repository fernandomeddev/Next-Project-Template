import { SunIcon, MoonIcon } from "../icons"

interface ChangeThemeButtonProps {
    theme: string
    ctxtheme: () => void
}

export default function ChangeThemeButton(props: ChangeThemeButtonProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.ctxtheme} className={` 
        xs:hidden sm:flex w-14 rounded-full items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        h-8 p-1
        `}>
            <div className={`
            flex items-center justify-center
            bg-white text-yellow-600 w-7 h-7 rounded-full 
            `}>
                {SunIcon(6)}
            </div>
            <div className={`
                sm:hidden text-white mr-4
            `}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.ctxtheme} className={`
        xs:hidden sm:flex justify-end w-14 rounded-full items-center cursor-pointer
        bg-gradient-to-r from-gray-500 to-gray-900
        h-8 p-1
        `}>
            <div className={`
                flex items-center text-white
            `}>
                <span></span>
            </div>
             <div className={`
            flex items-center justify-center
            bg-black text-yellow-300 w-7 h-7 rounded-full 
            `}>
                {MoonIcon(6)}
            </div>
        </div>
    )
}