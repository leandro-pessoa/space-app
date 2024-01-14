// json
import galeriaImgs from '../fotos.json'

// tipagens externas
import { IGaleria } from '../shared/interfaces/IGaleria'

// nomes das actions
const FILTER_IMGS = 'FILTER_IMGS'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
const SEARCH_IMG = 'SEARCH_IMG'
const FILL_ARRAY = 'FILL_ARRAY'

// tipagem do state
interface stateTypes {
    // filter(arg0: (foto: IGaleria) => boolean): unknown
    // map(arg0: (foto: IGaleria) => IGaleria): unknown
    state: IGaleria | IGaleria[]
}

// tipagens das actions
interface actionFilterTypes {
    type: 'FILTER_IMGS',
    payload: number
}
interface actionFavoriteTypes {
    type: 'TOGGLE_FAVORITE',
    payload: {id: string, favorita: boolean}
}
interface actionFillTypes {
    type: 'FILL_ARRAY'
}
interface actionSearchTypes {
    type: 'SEARCH_IMG',
    payload: string
}

const galeriaReducer = (state: stateTypes, action: actionFilterTypes | actionFavoriteTypes | actionFillTypes | actionSearchTypes) => {
    switch(action.type) {
        // filtra as imagens, retornando somente as imagens da categoria selecionada
        case FILTER_IMGS:
            const id = action.payload
            return galeriaImgs.filter((foto) => {
                if(foto.tagId === id){
                    return foto
                }
                if(id === 0){
                    return foto
                }
                else {
                    return
                }
            })
        // alterna entre favorito ou não em uma imagem
        case TOGGLE_FAVORITE:
            const pic = action.payload
            return state.map(foto => {
                return {
                  ...foto,
                  favorita: foto.id === pic.id ? !pic.favorita : foto.favorita
                }
            })
        case FILL_ARRAY:
            return [
                ...galeriaImgs
            ]
        case SEARCH_IMG:
            const value = action.payload
            return state.filter(foto => ((foto.titulo).toLowerCase().split(' ')).includes(value))
        default:
            return state
    }
}

export { FILTER_IMGS, TOGGLE_FAVORITE, FILL_ARRAY, SEARCH_IMG, galeriaReducer}