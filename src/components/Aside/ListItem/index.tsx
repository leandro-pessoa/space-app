// componentes
import { StyledLi, StyledA } from "./styles"

interface ListItemProps {
    children: React.ReactElement | string,
    inactiveIcon: string,
    activeIcon: string,
    active?: boolean
}

const ListItem = ({ children, inactiveIcon, activeIcon, active = false }: ListItemProps) => {
    return (
        <StyledLi>
            <StyledA
                $active={active}
            >
                <img src={active ? activeIcon : inactiveIcon}/> 
                {children}
            </StyledA>
        </StyledLi>
    )
}

export default ListItem