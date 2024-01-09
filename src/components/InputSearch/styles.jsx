// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

const StyledInput = styled.input`
    position: relative;
    border: 2px solid ${variables.pink};
    background-color: transparent;
    border-radius: .6rem;
    height: fit-content;
    width: 45%;
    padding: 1.1rem .5rem 1.1rem 1rem;
    font-family: ${variables.primaryFont};
    font-size: 1.25rem;
    color: ${variables.lightGray};

    &::placeholder {
        background: url(${props => props.$icon}) right center no-repeat;
        font-family: ${variables.primaryFont};
        color: ${variables.lightGray};
    }
    
    &:focus {
        outline: none;
    }

    @media (max-width: ${variables.tablet}) {
        width: 55%;
    } 

    @media (max-width: ${variables.smartphone}) {
        flex-grow: 1;
    }
`

export { StyledInput }