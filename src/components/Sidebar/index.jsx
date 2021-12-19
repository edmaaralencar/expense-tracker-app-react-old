import { SidebarList, SidebarLink } from './styles'

import { FiHome, FiArrowUp, FiArrowDown, FiNavigation } from "react-icons/fi"

const Sidebar = ({ openSidebar }) => {
    return (
        <SidebarList isSidebarOpen={openSidebar}>

            <SidebarLink to='/'>
                <FiHome size={35} color='#FFFFFF' />
                <span>Dashboard</span>
            </SidebarLink>

            <SidebarLink to='/incomes'>
                <FiArrowUp size={35} color='#FFFFFF' />
                <span>Entradas</span>
            </SidebarLink>

            <SidebarLink to='/outcomes'>
                <FiArrowDown size={35} color='#FFFFFF' />
                <span>Saídas</span>
            </SidebarLink>

            <SidebarLink to='/savings'>
                <FiNavigation size={35} color='#FFFFFF' />
                <span>Poupança</span>
            </SidebarLink>

        </SidebarList>
    )
}

export default Sidebar
