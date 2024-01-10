// json
import galeriaImgs from '../fotos.json'

// nomes das actions
const FILTER_IMGS = 'FILTER_IMGS'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const galeriaReducer = (state, action) => {
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
        default:
            return state
    }
}

export { FILTER_IMGS, TOGGLE_FAVORITE, galeriaReducer}