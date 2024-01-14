// funções
import { ReactElement } from 'react'

// componentes
import { StyledH2 } from './styles'

// tipagem dos props
interface TitleProps {
    children: string | ReactElement,
    align: string
}

const Title = ({ children, align }: TitleProps) => {
    return (
        <StyledH2 $align={align}>
            {children}
        </StyledH2>
    )
}

export default Title