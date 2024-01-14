// funções
import { styled } from 'styled-components'

// variáveis
import variables from '@/variables'

// tipagem dos props
interface FigureProps {
    readonly $small: boolean
}


const StyledFigure = styled.figure<FigureProps>`
    display: flex;
    flex-direction: column;
    margin: 0;
    flex-grow: 1;
    width: ${props => props.$small ? 'auto': '100%'};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 1.25rem;

    img {
        width: 100%;
        border-radius: 1.25rem 1.25rem 0 0;
    }

    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${variables.darkBlue};
        border-radius: 0 0 1.25rem 1.25rem;
        padding: .7rem 1rem;
        height: 100%;

        h3 {
            margin: 0;
            font-size: 1.25rem;
            color: ${variables.white};
            font-family: ${variables.primaryFontBold};
        }

        footer {    
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin: 0;
                color: ${variables.white};
                font-family: ${variables.primaryFont};
            }

            div {
                display: flex;
                gap: 0;
                button {
                    background-color: transparent;
                    border: none;
                    padding: 0 .5rem;
                    transition: ease .2s;
                    
                    &:hover {
                        cursor: pointer;
                        transform: translate(1px, 1px);
                    }
                }
            }
        }
    }

    @media (max-width: ${variables.notebook}) {
        figcaption {
            gap: .3rem;
        }
    }
`

export { StyledFigure }