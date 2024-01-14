// funções
import { useAppDispatch } from "../../features/hooks"

// actions
import { toggleAsideDisplay } from "../../features/reducer"

// ícones
import { IoMenu } from "react-icons/io5"

// componentes
import { StyledButton } from "./styles"

// variáveis
import variables from "../../variables"

// tipagens externas
import { IIcons } from "../../shared/interfaces/IIcons"

const iconParams: IIcons = {
    size: 36,
    color: variables.white
}

const Menu = () => {
    const dispatch = useAppDispatch()

    return (
        <>
            <StyledButton onClick={()=>dispatch(toggleAsideDisplay())}>
                <IoMenu
                    {...iconParams}
                />
            </StyledButton>
        </>
    )
}

export default Menu