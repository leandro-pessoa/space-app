// ícones
import { IoMenu } from "react-icons/io5"

// componentes
import { StyledButton } from "./styles"

// variáveis
import variables from "../../variables"

// context
import { useGaleriaContext } from "../../hooks/useGaleriaContext"

const iconParams = {
    size: 36,
    color: variables.white
}

const Menu = () => {
    const { toggleAsideDisplay } = useGaleriaContext()

    return (
        <>
            <StyledButton onClick={()=>toggleAsideDisplay()}>
                <IoMenu
                    {...iconParams}
                />
            </StyledButton>
        </>
    )
}

export default Menu