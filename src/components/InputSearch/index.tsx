// funções
import { useAppDispatch } from "@/features/hooks"
import { useState } from "react"

// componentes
import { StyledForm } from "./styles"

// actions
import { fillArray, searchImage } from "@/features/reducer"

const InputSearch = () => {
    // states
    const [inputValue, setInputValue] = useState('')

    // states globais
    const dispatch = useAppDispatch()

    // realiza a pesquisa 
    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fillArray())
        dispatch(searchImage(inputValue))
        setInputValue('')
    }

    return (
        <StyledForm onSubmit={(e)=>search(e)}>
            <input
                type='search'
                placeholder='O que você procura?'
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
        </StyledForm>
    )
}

export default InputSearch