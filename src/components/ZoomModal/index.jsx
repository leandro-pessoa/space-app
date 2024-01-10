// funções
import { useContext } from "react"

// componentes
import CardGaleria from "../Main/Galeria/CardGaleria"
import { Overlay, StyledDialog } from "./styles"

// ícones
import { IoIosClose } from "react-icons/io"

// variáveis
import variables from "../../variables"

// context
import { GaleriaContext } from "../../context/GaleriaContext"
import { useGaleriaContext } from "../../hooks/useGaleriaContext"

const ZoomModal = () => {
    // states globais
    const { selectedPicture } = useContext(GaleriaContext)
    const { closeModal } = useGaleriaContext()

    if(selectedPicture){
        return (
            <Overlay $display={selectedPicture}>
                <StyledDialog open={!!selectedPicture}>
                    <CardGaleria
                        foto={selectedPicture}
                        small={false}
                    />
                    <form method="dialog">
                        <button onClick={()=>closeModal()}>
                            <IoIosClose 
                                size={42}
                                color={variables.white}
                            />
                        </button>
                    </form>
                </StyledDialog>
            </Overlay>
        )
    }
}

export default ZoomModal