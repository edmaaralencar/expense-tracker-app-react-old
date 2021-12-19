import { Container, HeaderLogo, HeaderPerfil } from './styles'

import { FiMenu, FiChevronDown } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import profileImg from '../../assets/profile.png'

const Header = ({ openSidebar, setOpenSidebar }) => {
    return (
        <Container>
            <HeaderLogo>
                <FiMenu className="menu" size={35} color='#FFFFFF' onClick={() => setOpenSidebar(!openSidebar)} />
                <img src={logoImg} alt="Logo" />
            </HeaderLogo>

            <HeaderPerfil>
                <img src={profileImg} alt="Imagem de perfil" />
                <p>Edmar Alencar</p>
                <FiChevronDown size={30} color='#FFFFFF' />
            </HeaderPerfil>
        </Container>
    )
}

export default Header
