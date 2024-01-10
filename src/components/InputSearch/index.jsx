// funções
import { useContext } from "react"

// componentes
import { StyledForm } from "./styles"

// context
import { useGaleriaContext } from "../../hooks/useGaleriaContext"
import { GaleriaContext } from "../../context/GaleriaContext"

const InputSearch = () => {
    // states globais
    const { searchImage } = useGaleriaContext()
    const { searchValue, setSearchValue } = useContext(GaleriaContext)

    return (
        <StyledForm onSubmit={(e)=>searchImage(e)}>
            <input
                type='search'
                placeholder='O que você procura?'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            />
        </StyledForm>
    )
}

export default InputSearch