// componentes
import { StyledInput } from "./styles"

// imagens
import searchIcon from '/icones/search.png'

const InputSearch = () => {
    return (
        <StyledInput
            type='search'
            placeholder='O que você procura?'
            $icon={searchIcon}
        />
    )
}

export default InputSearch