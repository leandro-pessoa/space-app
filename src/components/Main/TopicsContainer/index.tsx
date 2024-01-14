// componentes
import { StyledSection } from './styles'
import Topic from './Topic'

// json
import tags from './tags.json'

const TopicsContainer = () => {
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