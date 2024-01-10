// funções
import { useContext } from 'react'

// componentes
import TopicsContainer from '../TopicsContainer'
import Title from "../../Title"
import { StyledDiv } from './styles'
import CardGaleria from './CardGaleria'
import CardPopular from './CardPopular'
import ButtonSeeMore from '../../ButtonSeeMore'

// context
import { GaleriaContext } from '../../../context/GaleriaContext'

const Galeria = () => {
    // states globais
    const { 
        galeriaArray,
        popularesArray,
    } = useContext(GaleriaContext)

    return (
        <>
            <TopicsContainer/>
            <StyledDiv>
                <section className='galeria-container'>
                    <Title align={'left'}>Navegue pela galeria</Title>
                    <div className='container'>
                        {
                            galeriaArray.map((foto) =>
                                <CardGaleria
                                    foto={foto}
                                    key={foto.id}
                                    small={true}
                                />      
                            )
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