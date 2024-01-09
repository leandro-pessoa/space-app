// componenetes
import { StyledLi } from "./styles"

const Topic = ({ children, id, filterGaleria, activeCategory }) => {
    return (
        <StyledLi $active={activeCategory === id}>
            <button onClick={()=>filterGaleria(id)}>
                {children}
            </button>
        </StyledLi>
    )
}

export default Topic