// funções
import { useContext } from 'react'

// componenetes
import { StyledLi } from "./styles"

// context
import { GaleriaContext } from '../../../../context/GaleriaContext'
import { useGaleriaContext } from '../../../../hooks/useGaleriaContext'

const Topic = ({ children, id }) => {
    // states globais
    const { activeCategory } = useContext(GaleriaContext)
    const { filterGaleria } = useGaleriaContext()

    return (
        <StyledLi $active={activeCategory === id}>
            <button onClick={()=>filterGaleria(id)}>
                {children}
            </button>
        </StyledLi>
    )
}

export default Topic