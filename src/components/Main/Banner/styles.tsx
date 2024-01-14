// funções
import { styled } from 'styled-components'

// imagens
import background from '@/assets/banner.png'

// variáveis
import variables from '@/variables'

const StyledSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    background: url(${background}) no-repeat center;
    background-size: cover;
    border-radius: 1.25rem;
    padding: 4rem;

    h2 {
        font-family: ${variables.primaryFont};
        color: ${variables.white};
        font-weight: 100;
        font-size: 2rem;
        width: 15rem;
    }

    @media (max-width: ${variables.smartphone}) {
        padding: 2.3rem 1.5rem;

        h2 {
            text-align: center;
            font-size: 1.5rem;
            width: 100%;
        }
    }
`

export { StyledSection }