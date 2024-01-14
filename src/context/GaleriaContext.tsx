// funções
import { createContext, useReducer, useState } from "react"
import { galeriaReducer } from "../reducers/galeriaReducer"

// json
import galeriaImgs from '../fotos.json'
import popularesImgs from '../populares.json'

// tipagens externas
import { IGaleria } from "../shared/interfaces/IGaleria"
import { IPopulares } from "../shared/interfaces/IPopulares"

interface GaleriaContextType {
    galeriaArray: IGaleria[],
    dispatch: React.Dispatch<React.SetStateAction<IGaleria[]>>,
    popularesArray: IPopulares[],
    setPopularesArray: React.Dispatch<React.SetStateAction<IPopulares[]>>,
    selectedPicture: IGaleria | null,
    setSelectedPicture: React.Dispatch<React.SetStateAction<IGaleria | null>> | React.Dispatch<React.SetStateAction<null>>,
    asideDisplay: boolean,
    setAsideDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    activeCategory: number,
    setActiveCategory: React.Dispatch<React.SetStateAction<number>>,
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

interface GaleriaProviderProps {
    children: React.ReactNode
}

const GaleriaContext = createContext<GaleriaContextType | undefined>(undefined)

GaleriaContext.displayName = 'galeria'

const GaleriaProvider = ({ children }: GaleriaProviderProps) => {

    const [galeriaArray, dispatch] = useReducer(galeriaReducer, galeriaImgs)
    const [popularesArray, setPopularesArray] = useState<IPopulares[]>(popularesImgs)
    const [selectedPicture, setSelectedPicture] = useState<IGaleria | null>(null)
    const [asideDisplay, setAsideDisplay] = useState<boolean>(false)
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [searchValue, setSearchValue] = useState<string>('')

    const states: GaleriaContextType = {
        galeriaArray,
        dispatch,
        popularesArray,
        setPopularesArray,
        selectedPicture,
        setSelectedPicture,
        asideDisplay,
        setAsideDisplay,
        activeCategory,
        setActiveCategory,
        searchValue,
        setSearchValue
    }

    return (
        <GaleriaContext.Provider value={states}>
            { children }
        </GaleriaContext.Provider>
    )
}

export { GaleriaContext, GaleriaProvider }