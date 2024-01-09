// componentes
import { StyledFigure } from './styles'

// ícones
import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { CgArrowsExpandRight } from 'react-icons/cg'

// variáveis
import variables from '../../../../variables'

const CardGaleria = ({ small, foto, onSelectedPicture, onFavorite }) => {
    return (
        <StyledFigure $small={small}>
            <img src={foto.path} alt={`Imagem com o título ${foto.titulo}`}/>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <div>
                        <button onClick={()=>onFavorite(foto)}>
                            {
                                foto.favorita ?
                                <MdFavorite
                                    size={24}
                                    color={variables.pink}
                                />
                                :
                                <MdFavoriteBorder
                                    size={24}
                                    color={variables.gray}
                                />
                            }
                        </button>
                        {   
                            small ?
                            <button onClick={()=>onSelectedPicture(foto)}>
                                <CgArrowsExpandRight
                                    size={24}
                                    color={variables.white}
                                />
                            </button>
                            :
                            ''
                        }
                    </div>
                </footer>
            </figcaption>
        </StyledFigure>
    )
}

export default CardGaleria