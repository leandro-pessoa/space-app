// funções
import { styled } from 'styled-components' 

// variáveis
import variables from '../../variables'

const StyledH2 = styled.h2`
    color: ${variables.lightPurple};
    font-weight: 100;
    font-size: 2rem;
    text-align: ${props => props.$align};

    @media (max-width: ${variables.tablet}) {
        font-size: 1.75rem;
    }

    @media (max-width: ${variables.smartphone}) {
        text-align: left;
        font-size: 1.5rem;
    }
`

export { StyledH2 }