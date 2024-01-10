// funções
import { createContext, useReducer, useState } from "react"
import { galeriaReducer } from "../reducers/galeriaReducer"

// json
import galeriaImgs from '../fotos.json'
import popularesImgs from '../populares.json'

const GaleriaContext = createContext()

GaleriaContext.displayName = 'galeria'

const GaleriaProvider = ({ children }) => {
    const [galeriaArray, dispatch] = useReducer(galeriaReducer, galeriaImgs)
    const [popularesArray, setPopularesArray] = useState(popularesImgs)
    const [selectedPicture, setSelectedPicture] = useState(null)
    const [asideDisplay, setAsideDisplay] = useState(false)
    const [activeCategory, setActiveCategory] = useState(0)

    const states = {
        galeriaArray,
        dispatch,
        popularesArray,
        setPopularesArray,
        selectedPicture,
        setSelectedPicture,
        asideDisplay,
        setAsideDisplay,
        activeCategory,
        setActiveCategory
    }

    return (
        <GaleriaContext.Provider value={states}>
            { children }
        </GaleriaContext.Provider>
    )
}

export { GaleriaContext, GaleriaProvider }