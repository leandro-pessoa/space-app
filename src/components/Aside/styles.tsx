// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

interface AsideProps {
    readonly $display: boolean
}

const StyledAside = styled.aside<AsideProps>`
    display: flex;
    justify-content: flex-start;
    width: 230px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    @media (max-width: ${variables.smartphone}) {
        position: fixed;
        display: ${props => props.$display ? 'flex' : 'none'};
        flex-direction: column;
        top: 0;
        left: 0;
        height: 100vh;
        padding: 2.75rem 1rem 0 1.5rem;
        background: ${variables.blueGradient};

        ul {
            margin-top: 1.5rem;
            padding-left: .5rem;
        }
    }
`

export { StyledAside }