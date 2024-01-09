// componentes
import { StyledSection } from './styles'
import Topic from './Topic'

// json
import tags from './tags.json'

const TopicsContainer = ({ filterGaleria, activeCategory }) => {
    return (
        <StyledSection>
            <h3>
                Busque por tags:
            </h3>
            <ul>
                {
                    tags.map((tag) => 
                        <Topic 
                            key={tag.id} 
                            id={tag.id}
                            filterGaleria={filterGaleria}
                            activeCategory={activeCategory}
                        >
                            {tag.titulo}
                        </Topic>
                    )
                }
            </ul>
        </StyledSection>
    )
}

export default TopicsContainer