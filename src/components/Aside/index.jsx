// funções
import { useContext } from 'react'

// componentes
import { StyledAside } from './styles'
import ListItem from './ListItem'
import Menu from '../Menu'

// context
import { GaleriaContext } from '../../context/GaleriaContext'

const Aside = () => {

    // retorna o caminho da imagem de acordo com o parâmetro passado
    const iconPathName = (iconName) => {
        return `/icones/${iconName}.png`
    }

    // states globais
    const { asideDisplay } = useContext(GaleriaContext)

    return (
        <StyledAside $display={asideDisplay}>
            <Menu/>
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