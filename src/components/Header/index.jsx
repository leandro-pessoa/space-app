// imagens
import logo from '/imagens/logo.png'

// componentes
import { StyledHeader } from './styles'
import InputSearch from '../InputSearch'
import Menu from '../Menu'

const Header = ({ setAsideDisplay }) => {
    return (
        <StyledHeader>
            <img src={logo} alt="Logo do Space App"/>
            <div>
                <Menu setAsideDisplay={setAsideDisplay}/>
            </div>
            <InputSearch/>
        </StyledHeader>
    )
}

export default Header