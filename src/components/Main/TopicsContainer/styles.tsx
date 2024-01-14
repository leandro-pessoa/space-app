// funções
import { styled } from 'styled-components'

// variáveis
import variables from '@/variables'

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2rem 0 1.4rem 0;
    overflow-x: auto;

    h3 {
        display: flex;
        justify-content: center;
        color: ${variables.lightGray};
        font-size: 1.3rem;
        font-weight: 100;
        margin: 0;
        margin-right: 5rem;
        white-space: nowrap;
    }

    ul {    
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        gap: 1.5rem;
        padding-bottom: .4rem;
    }

    @media (max-width: ${variables.smartphone}) {
        flex-direction: column;
        align-items: normal;
        margin: 1rem 0;
        
        h3 {
            font-size: 1.25rem;
            margin: 0;
            margin-bottom: 1.5rem;
        }

        ul {
            overflow: auto;
        }
    }
`


export { StyledSection }