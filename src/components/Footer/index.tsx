// funções
import { StyledFooter } from "./styles"

// ícones
import { FaFacebook } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"

// variáveis
import variables from "@/variables"

// tipagens externas
import { IIcons } from "@/shared/interfaces/IIcons"

const Footer = () => {
    const iconsParams: IIcons = {
        size: 24,
        color: variables.white
    }

    return (
        <StyledFooter>
            <div>   
                <a href="#">
                    <FaFacebook {...iconsParams}/>
                </a>
                <a href="#">
                    <BsTwitterX {...iconsParams}/>
                </a>
                <a href="#">
                    <FaInstagram {...iconsParams}/>
                </a>
            </div>
            <p>Desenvolvido por Leandro Pessoa</p>
        </StyledFooter>
    )
}

export default Footer