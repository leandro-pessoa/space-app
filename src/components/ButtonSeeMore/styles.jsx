// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

const StyledButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: 2px solid ${variables.pink};
    border-radius: .6rem;
    padding: .8rem 1.8rem;
    color: ${variables.white};
    font-size: 1.25rem;
    grid-column: 1 / 3;
    transition: .3s;

    &:hover {
        cursor: pointer;
        background: ${variables.pinkGradient};
    }
`

export { StyledButton }