// funções
import { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '@/features/hooks'

// componenetes
import { StyledLi } from "./styles"

// actions
import { filterImgs } from '@/features/reducer'

// tipagem dos props
interface TopicProps {
    children: ReactElement | string,
    id: number
}

const Topic = ({ children, id }: TopicProps) => {
    // states globais
    const activeCategory = useAppSelector(state => state.galeria.activeCategory)
    const dispatch = useAppDispatch()

    return (
        <StyledLi $active={activeCategory === id}>
            <button onClick={()=>dispatch(filterImgs(id))}>
                {children}
            </button>
        </StyledLi>
    )
}

export default Topic