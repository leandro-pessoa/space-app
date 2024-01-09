// componentes
import { StyledAside } from './styles'
import ListItem from './ListItem'
import Menu from '../Menu'

const Aside = ({ asideDisplay, setAsideDisplay }) => {

    // retorna o caminho da imagem de acordo com o parâmetro passado
    const iconPathName = (iconName) => {
        return `/icones/${iconName}.png`
    }

    return (
        <StyledAside $display={asideDisplay}>
            <Menu setAsideDisplay={setAsideDisplay}/>
            <nav>
                <ul>
                    <ListItem
                        inactiveIcon={iconPathName('home-inativo')}
                        activeIcon={iconPathName('home-ativo')}
                        active
                    >
                        Início
                    </ListItem>
                    <ListItem
                        inactiveIcon={iconPathName('mais-vistas-inativo')}
                        activeIcon={iconPathName('mais-vistas-ativo')}
                    >
                        Mais vistas
                    </ListItem>
                    <ListItem
                        inactiveIcon={iconPathName('mais-curtidas-inativo')}
                        activeIcon={iconPathName('mais-curtidas-ativo')}
                    >
                        Mais curtidas
                    </ListItem>
                    <ListItem
                        inactiveIcon={iconPathName('novas-inativo')}
                        activeIcon={iconPathName('novas-ativo')}
                    >
                        Novas
                    </ListItem>
                    <ListItem
                        inactiveIcon={iconPathName('surpreenda-me-inativo')}
                        activeIcon={iconPathName('surpreenda-me-ativo')}
                    >
                        Surpreenda-me
                    </ListItem>
                </ul>
            </nav>
        </StyledAside>
    )
}

export default Aside