// funções
import { useContext } from "react"

// context
import { GaleriaContext } from "../context/GaleriaContext"

// json
import galeriaImgs from '../fotos.json'
import popularesImgs from '../populares.json'

// nomes das actions
const FILTER_IMGS = 'FILTER_IMGS'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const galeriaReducer = (state, action) => {
    switch(action.type) {
        case FILTER_IMGS:
            const id = action.payload
            return galeriaImgs.filter((foto) => {
                if(foto.tagId === id){
                    return foto
                }
                if(id === 0){
                    return foto
                }
            })
        case TOGGLE_FAVORITE:
            return state
        default:
            return state
    }
}

export { FILTER_IMGS, TOGGLE_FAVORITE, galeriaReducer}