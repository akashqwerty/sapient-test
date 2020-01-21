import { SAVE_CHARACTER_LIST } from './action'

const initialState = {
    characterList : []
}
export default function getCharacterListReducer (state = initialState, action) {
    switch (action && action.type) {
        case SAVE_CHARACTER_LIST: 
        return {
            ...state,
            characterList: action.payload
        }
        default:
            return state

    }
}