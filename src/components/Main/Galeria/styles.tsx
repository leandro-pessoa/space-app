// funções
import { styled } from 'styled-components'

// variáveis
import variables from '@/variables'

const StyledDiv = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;

    .galeria-container {
        width: calc(100% - 13.25rem);

        .container {
            display: grid;
            grid-template-columns: 48% 48%;
            gap: 1.5rem;

            .no-results {
                color: ${variables.white};
                font-size: 1.5rem;
                text-align: center;
                font-weight: 100;
            }
        }
    }

    .populares-container {
        width: 13.25rem;

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
        }
    }

    @media (max-width: ${variables.notebook}) {
        .galeria-container {
            width: calc(100% - 9.7rem);
        }

        .populares-container {
            width: 9.7rem;
        }
    }

    @media (max-width: ${variables.tablet}) {
        flex-direction: column;

        .galeria-container {
            width: 100%;

            .container {
                .no-results {
                    font-size: 1.2rem;
                }
            }
        }

        .populares-container {
            width: 100%;

            .container {
                display: grid;
                grid-template-columns: auto auto;
            }
        }
    }

    @media (max-width: ${variables.smartphone}) {
        .galeria-container {
            .container {
                grid-template-columns: 100%;
            }
        }
    }
`

export { StyledDiv }