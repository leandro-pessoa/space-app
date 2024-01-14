// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

const StyledFooter = styled.footer`
    background-color: ${variables.darkBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    p {
        margin: 0;
        color: ${variables.white};
        font-weight: 100;
        font-family: ${variables.secondaryFont};
    }

    @media (max-width: ${variables.smartphone}) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
`

export { StyledFooter }