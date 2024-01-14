// imagens
import logo from '/imagens/logo.png'

// componentes
import { StyledHeader } from './styles'
import InputSearch from '../InputSearch'
import Menu from '../Menu'

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo do Space App"/>
            <div>
                <Menu/>
            </div>
            <InputSearch/>
        </StyledHeader>
    )
}

export default Header