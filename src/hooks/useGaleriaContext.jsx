// funções
import { useContext } from "react"

// context
import { FILTER_IMGS, TOGGLE_FAVORITE } from "../reducers/galeriaReducer"
import { GaleriaContext } from "../context/GaleriaContext"

// actions
const filterAction = (id) => ({
    type: FILTER_IMGS,
    payload: id
})

const toggleFavoriteAction = (id) => ({
    type: TOGGLE_FAVORITE,
    payload: id
})

// funções
const useGaleriaContext = () => {
    // states globais
    const { setActiveCategory } = useContext(GaleriaContext)

    const { dispatch } = useContext(GaleriaContext)

    const filterGaleria = (id) => {
        dispatch(filterAction(id))
        
    }

    const toggleFavorite = (pic) => {
        dispatch(toggleFavoriteAction(pic))
        setActiveCategory(fotoId)
    }

    return {
        filterGaleria,
        toggleFavorite,
    }
}

export { useGaleriaContext }