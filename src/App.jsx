// funções
import { styled } from 'styled-components'
import { useState } from 'react'

// componentes
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import Aside from './components/Aside'
import Banner from './components/Main/Banner'
import Galeria from './components/Main/Galeria'
import ZoomModal from './components/ZoomModal'
import Footer from './components/Footer'

// variáveis
import variables from './variables'

// json
import galeriaImgs from './fotos.json'
import popularesImgs from './populares.json'

// context
import { GaleriaProvider } from './context/GaleriaContext'

const GradientBackground = styled.div`
  background: ${variables.blueGradient};
  padding: 0 1.5rem;
  padding-bottom: 4.5rem;
  overflow: overlay;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  div {
    display: flex;
    gap: 1.5rem;
  }
`

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
`

const App = () => {

  // states
  const [galeriaArray, setGaleriaArray] = useState(galeriaImgs)
  const [popularesArray, setPopularesArray] = useState(popularesImgs)
  const [selectedPicture, setSelectedPicture] = useState(null)
  const [asideDisplay, setAsideDisplay] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  // favorita uma imagem
  const toggleFavorite = (pic) => {
    if(pic.id === selectedPicture?.id){
      setSelectedPicture({
        ...selectedPicture,
        favorita: !selectedPicture.favorita
      })
    }

    setGaleriaArray(galeriaArray.map(foto => {
      return {
        ...foto,
        favorita: foto.id === pic.id ? !pic.favorita : foto.favorita
      }
    }))
  }

  // filtra as imagens da galeria de acordo com o id
  const filterGaleria = (id) => {
    setGaleriaArray(galeriaImgs.filter((foto) => {
      if(foto.tagId === id){ // retorna uma categoria específica
        return foto
      }
      if(id === 0){ // retorna todas as fotos
        return foto
      }
    }))
    setActiveCategory(id)
  }

  return (
    <GaleriaProvider>
      <GradientBackground>
        <GlobalStyles/>
        <Header
          setAsideDisplay={() => setAsideDisplay(!asideDisplay)}
        />
        <StyledSection>
          <div>
            <Aside
              asideDisplay={asideDisplay}
              setAsideDisplay={() => setAsideDisplay(!asideDisplay)}
            />
            <Banner/>
          </div>
          <StyledMain>
              <Galeria 
                galeria={galeriaArray} 
                populares={popularesArray}
                onSelectedPicture={(pic) => setSelectedPicture(pic)}
                onFavorite={(pic) => toggleFavorite(pic)}
                filterGaleria={(id) => filterGaleria(id)}
                activeCategory={activeCategory}
              />
          </StyledMain>
        </StyledSection>
        <ZoomModal 
          foto={selectedPicture}
          onClose={()=>setSelectedPicture(null)}
          onFavorite={(pic) => toggleFavorite(pic)}
        />
      </GradientBackground>
      <Footer/>
    </GaleriaProvider>
  )
}

export default App