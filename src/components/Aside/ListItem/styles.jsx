// funções 
import { styled } from 'styled-components'

// variáveis
import variables from '../../../variables'

const StyledLi = styled.li`
    margin-bottom: 1.5em;
`

const StyledA = styled.a`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    text-decoration: none;
    color: ${props => props.$active ? variables.pink : variables.lightGray};
    font-family: ${props => props.$active ? 'Gandhi bold' : 'Gandhi regular'};
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`

export { StyledLi, StyledA }