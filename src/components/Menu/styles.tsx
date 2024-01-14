// funções
import { styled } from 'styled-components'

// variáveis
import variables from "@/variables"

const StyledButton = styled.button`
    display: none;
    background-color: transparent;
    border: none;
    border-radius: 32px;
    padding: .3rem;
    transition: ease .2s;

    &:active {
        background-color: ${variables.lightPurple};
    }

    @media (max-width: ${variables.smartphone}) {
        display: flex;
    }
`

export { StyledButton }