// funções
import { styled } from 'styled-components'

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

// context
import { GaleriaProvider } from './context/GaleriaContext'

const GradientBackground = styled.div`
  background: ${variables.blueGradient};
  padding: 0 1.5rem;
  padding-bottom: 4.5rem;
  overflow: overlay;

 @media (min-width: ${variables.desktop}) {
  padding: 0 10rem;
  padding-bottom: 4.5rem;
 }
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
  return (
    <GaleriaProvider>
      <GradientBackground>
        <GlobalStyles/>
        <Header/>
        <StyledSection>
          <div>
            <Aside/>
            <Banner/>
          </div>
          <StyledMain>
              <Galeria/>
          </StyledMain>
        </StyledSection>
        <ZoomModal/>
      </GradientBackground>
      <Footer/>
    </GaleriaProvider>
  )
}

export default App