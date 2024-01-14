// funções
import { styled } from 'styled-components'

// variáveis
import variables from '../../variables'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.7rem 0;

    img {
        max-width: 13rem;
    }

    @media (max-width: ${variables.smartphone}) {
        flex-direction: row-reverse;
        flex-wrap: wrap;
        padding: 2rem 0;
        row-gap: 2rem;
    }
`

export { StyledHeader }