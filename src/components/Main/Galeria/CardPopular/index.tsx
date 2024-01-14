// componentes
import { StyledDiv } from "./styles"

// tipagem dos props
interface CardPopularProps {
    path: string
}

const CardPopular = ({ path }: CardPopularProps) => {
    return (
        <StyledDiv>
            <img src={path}/>
        </StyledDiv>
    )
}

export default CardPopular