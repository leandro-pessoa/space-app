// componentes
import CardGaleria from "../Main/Galeria/CardGaleria"
import { Overlay, StyledDialog } from "./styles"

// ícones
import { IoIosClose } from "react-icons/io"

// variáveis
import variables from "../../variables"

const ZoomModal = ({ foto, onClose, onFavorite }) => {
    if(foto){
        return (
            <Overlay $display={foto}>
                <StyledDialog open={!!foto}>
                    <CardGaleria
                        foto={foto}
                        small={false}
                        onFavorite={onFavorite}
                    />
                    <form method="dialog">
                        <button onClick={()=>onClose()}>
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