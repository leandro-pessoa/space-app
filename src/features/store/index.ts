// funções
import { configureStore } from "@reduxjs/toolkit"

// reducer
import { galeriaReducer } from '../reducer'

// declaração da store
export const store = configureStore({
    reducer: {
        galeria: galeriaReducer
    }
})

// tipagens utilizadas em outros arquivos
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
