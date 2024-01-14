// funções
import { useAppSelector } from '@/features/hooks'

// componentes
import TopicsContainer from '../TopicsContainer'
import Title from "@/components/Title"
import { StyledDiv } from './styles'
import CardGaleria from './CardGaleria'
import CardPopular from './CardPopular'
import ButtonSeeMore from '@/components/ButtonSeeMore'

const Galeria = () => {
    // states globais
    const galeriaArray = useAppSelector(state => state.galeria.galeriaArray)
    const popularesArray = useAppSelector(state => state.galeria.popularesArray)

    return (
        <>
            <TopicsContainer/>
            <StyledDiv>
                <section className='galeria-container'>
                    <Title align={'left'}>Navegue pela galeria</Title>
                    <div className='container'>
                        {
                            galeriaArray.length >= 1 ? galeriaArray.map((foto) =>
                                <CardGaleria
                                    foto={foto}
                                    key={foto.id}
                                    small={true}
                                />      
                            )
                            :
                            <div className='no-results'>
                                Não há imagens referentes a sua pesquisa.
                            </div>
                        }
                    </div>
                </section>
                <section className='populares-container'>
                    <Title align={'center'}>Populares</Title>
                    <div className='container'>
                        {
                            popularesArray.map((foto) => 
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