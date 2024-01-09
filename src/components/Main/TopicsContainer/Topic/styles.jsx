// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../../../variables'

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    background-color: ${variables.darkGray};
    border-radius: .6rem;
    border: 2px solid;
    border-color: ${props => props.$active ? variables.pink : 'transparent'};

    button {
        background-color: transparent;
        border: none;
        font-size: 1.3rem;
        color: ${variables.white};
        font-family: ${variables.primaryFont};
        padding: .6rem .5rem;

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: ${variables.smartphone}) { 
        font-size: 1rem;
    }
`

export { StyledLi }