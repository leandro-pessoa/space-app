// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000a6;
    display: ${props => props.$display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`

const StyledDialog = styled.dialog`
    position: relative;
    background-color: transparent;
    border: none;
    width: 50%;
    
    form {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1.5rem;

        button {
            background-color: transparent;
            border: none;
            transition: ease .2s;

            &:hover {
                cursor: pointer;
                transform: translate(1px, 1px);
            }
        }
    }

    @media (max-width: ${variables.notebook}) {
        width: 60%;
    }

    @media (max-width: ${variables.tablet}) {
        width: 80%;
    }

    @media (max-width: ${variables.smartphone}) {
        width: 90%;
    }
`

export { Overlay, StyledDialog }
