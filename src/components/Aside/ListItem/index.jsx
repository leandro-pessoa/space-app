// componentes
import { StyledLi, StyledA } from "./styles"

const ListItem = ({ children, inactiveIcon, activeIcon, active = false }) => {
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