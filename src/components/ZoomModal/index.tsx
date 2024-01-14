// funções
import { useAppDispatch, useAppSelector } from "@/features/hooks"

// componentes
import CardGaleria from "../Main/Galeria/CardGaleria"
import { Overlay, StyledDialog } from "./styles"

// ícones
import { IoIosClose } from "react-icons/io"

// variáveis
import variables from "@/variables"

// actions
import { closeModal } from "@/features/reducer"

const ZoomModal = () => {
    // states globais
    const selectedPicture = useAppSelector(state => state.galeria.selectedPicture)
    const dispatch = useAppDispatch()

    if(selectedPicture){
        return (
            <Overlay $display={selectedPicture}>
                <StyledDialog open={!!selectedPicture}>
                    <CardGaleria
                        foto={selectedPicture}
                        small={false}
                    />
                    <form method="dialog">
                        <button onClick={()=>dispatch(closeModal())}>
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
    else {
        return <></>
    }
}

export default ZoomModal