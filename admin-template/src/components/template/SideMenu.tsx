import { AddContractIcon, ConfigurationIcon, CurrentContractIcon, IconHome, LogoutIcon, NotificationIcon } from "../icons";
import MenuItem from "./ManuItem";
import Logo from "./Logo";

export default function  SideMenu() {
    return (
        <aside className={`
            flex flex-col
            text-gray-900
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
             flex flex-col items-center 
             justify-center h-20 w-20 
             bg-gradient-to-r
              from-indigo-500 to-purple-800`}>
                <Logo />
            </div>
            <ul className='flex-grow'>
                <MenuItem url="/" text="Início" icon={IconHome} />
                <MenuItem url="/new_contract" text="Novo" icon={AddContractIcon} />
                <MenuItem url="/contracts" text=" Contratos" icon={CurrentContractIcon} />
                <MenuItem url="/notifications" text="Notificações" icon={NotificationIcon} />
                <MenuItem url="/settings" text="configuração" icon={ConfigurationIcon} />
            </ul>
            <ul>
                <MenuItem className="hover:bg-red-600 dark:text-red-400 text-red-400 dark:hover:text-white  hover:text-white" onClick={()=> alert('saindo....')} text="sair" icon={LogoutIcon} />
            </ul>
        </aside>
    )
}