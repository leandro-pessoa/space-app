// funções
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// tipagens externas
import { IGaleria } from "@/shared/interfaces/IGaleria"
import { IPopulares } from "@/shared/interfaces/IPopulares"

// json
import galeriaImgs from '@/fotos.json'
import popularesImgs from '@/populares.json'

// tipagem dos states
interface StatesTypes {
    galeriaArray: IGaleria[],
    popularesArray: IPopulares[],
    selectedPicture: IGaleria | null,
    asideDisplay: boolean,
    activeCategory: number | null,
    searchValue: string
}

// valores iniciais dos states
const initialState: StatesTypes = {
    galeriaArray: galeriaImgs,
    popularesArray: popularesImgs,
    selectedPicture: null,
    asideDisplay: false,
    activeCategory: 0,
    searchValue: ''
}

// reducer
export const galeriaSlice = createSlice({
    name: 'galeria',
    initialState,
    reducers: {
        filterImgs: (state, action: PayloadAction<number>) => {
            const id = action.payload
            state.galeriaArray = galeriaImgs.filter((foto) => {
                if (foto.tagId === id) {
                    return foto
                }
                if (id === 0) {
                    return foto
                }
                return
            })
            state.activeCategory = id
        },
        toggleFavorite: (state, action: PayloadAction<{ id: String, favorita?: boolean }>) => {
            const pic = action.payload
            if (pic.id === state.selectedPicture?.id) {
                state.selectedPicture = {
                    ...state.selectedPicture,
                    favorita: !state.selectedPicture.favorita
                }
            }
            state.galeriaArray = state.galeriaArray.map(foto => {
                return {
                    ...foto,
                    favorita: foto.id === pic.id ? !pic.favorita : foto.favorita
                }
            })
        },
        toggleAsideDisplay: state => {
            state.asideDisplay = !state.asideDisplay
        },
        selectPicture: (state, action: PayloadAction<IGaleria>) => {
            state.selectedPicture = action.payload
        },
        closeModal: state => {
            state.selectedPicture = null
        },
        fillArray: state => {
            state.galeriaArray = [...galeriaImgs]
        },
        searchImage: (state, action: PayloadAction<string>) => {
            const value = action.payload
            state.galeriaArray = state.galeriaArray.filter(foto =>
                ((foto.titulo).toLowerCase().split(' ')).includes(value)
            )
            state.searchValue = ''
            state.activeCategory = null
        }
    }
})

// export das actions
export const {
    filterImgs,
    toggleFavorite,
    toggleAsideDisplay,
    selectPicture,
    closeModal,
    fillArray,
    searchImage
} = galeriaSlice.actions

// export do reducer
export const galeriaReducer = galeriaSlice.reducer