// componentes
import TopicsContainer from '../TopicsContainer'
import Title from "../../Title"
import { StyledDiv } from './styles'
import CardGaleria from './CardGaleria'
import CardPopular from './CardPopular'
import ButtonSeeMore from '../../ButtonSeeMore'

const Galeria = ({ galeria = [], populares = [], onSelectedPicture, onFavorite, filterGaleria, activeCategory }) => {
    return (
        <>
            <TopicsContainer 
                filterGaleria={filterGaleria}
                activeCategory={activeCategory}
            />
            <StyledDiv>
                <section className='galeria-container'>
                    <Title align={'left'}>Navegue pela galeria</Title>
                    <div className='container'>
                        {
                            galeria.map((foto) => 
                                <CardGaleria
                                    foto={foto}
                                    key={foto.id}
                                    small={true}
                                    onSelectedPicture={onSelectedPicture}
                                    onFavorite={onFavorite}
                                />  
                            )
                        }
                    </div>
                </section>
                <section className='populares-container'>
                    <Title align={'center'}>Populares</Title>
                    <div className='container'>
                        {
                            populares.map((foto) => 
                                <CardPopular
                                    path={foto.path}
                                    key={foto.id}
                                />
                            )
                        }
                        <ButtonSeeMore/>
                    </div>
                </section>
            </StyledDiv>
        </>
    )
}

export default Galeria