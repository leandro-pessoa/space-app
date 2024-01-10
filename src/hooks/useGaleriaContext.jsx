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

const toggleFavoriteAction = (pic) => ({
    type: TOGGLE_FAVORITE,
    payload: pic
})

// funções
const useGaleriaContext = () => {
    // states globais
    const { 
        setActiveCategory,
        dispatch,
        asideDisplay,
        setAsideDisplay,
        selectedPicture,
        setSelectedPicture,
    } = useContext(GaleriaContext)

    // dispara a action 'filterAction', filtrando as imagens
    const filterGaleria = (id) => {
        dispatch(filterAction(id))
        setActiveCategory(id)
    }

    // dispara a ation 'toggleFavoriteAction', favoritando uma imagem
    const toggleFavorite = (pic) => {
        if(pic.id === selectedPicture?.id){
            setSelectedPicture({
              ...selectedPicture,
              favorita: !selectedPicture.favorita
            })
        }
        dispatch(toggleFavoriteAction(pic))
    }

    // alterna o display do aside ao clicar no ícone de menu no header
    const toggleAsideDisplay = () => {
        setAsideDisplay(!asideDisplay)
    }

    // seleciona uma foto para abrir o zoom ou para favoritar
    const selectPicture = (foto) => {
        setSelectedPicture(foto)
    }

    // fecha o zoom
    const closeModal = () => {
        setSelectedPicture(null)
    }

    return {
        filterGaleria,
        toggleFavorite,
        toggleAsideDisplay,
        selectPicture,
        closeModal
    }
}

export { useGaleriaContext }