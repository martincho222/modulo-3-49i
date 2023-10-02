import { GET_CURSOS } from "./types";


export const GlobalReducer = (state, action) => {
    switch (action?.type) {
            case GET_CURSOS:
                return {
                    ...state,
                    cursos: action?.payload
                }
        default:
            return state;
    }
}