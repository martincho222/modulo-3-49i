import { createContext } from 'react'

export const initialState = {
    users: [],
    cursos: [],
    isLoading: false,
    categorias: [],
    cursosByCategory: [],
}

export const GlobalContext = createContext({
    state: initialState,
    dispatch: (action) => {}
})