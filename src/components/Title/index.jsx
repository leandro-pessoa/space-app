// componentes
import { StyledH2 } from './styles'

const Title = ({ children, align }) => {
    return (
        <StyledH2 $align={align}>
            {children}
        </StyledH2>
    )
}

export default Title