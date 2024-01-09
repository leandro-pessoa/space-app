// ícones
import { IoMenu } from "react-icons/io5"

// componentes
import { StyledButton } from "./styles"

// variáveis
import variables from "../../variables"

const iconParams = {
    size: 36,
    color: variables.white
}

const Menu = ({ setAsideDisplay }) => {
    return (
        <>
            <StyledButton onClick={()=>setAsideDisplay()}>
                <IoMenu
                    {...iconParams}
                />
            </StyledButton>
        </>
    )
}

export default Menu