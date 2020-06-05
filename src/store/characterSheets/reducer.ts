import { Action, State } from "./types";
import { CHARACTER_SHEET_LIST_READ_PENDING, CHARACTER_SHEET_LIST_READ_FAILED, CHARACTER_SHEET_LIST_READ_SUCCESS } from "./actions";
import { CharacterSheet } from "../../types/CharacterSheet";

const initialState: State = {
    loading: false,
    characterSheets: [],
    error: undefined
}

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case CHARACTER_SHEET_LIST_READ_PENDING:
            return {
                ...state,
                loading: true
            };
        case CHARACTER_SHEET_LIST_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                characterSheets: action.payload as CharacterSheet[],
            };
        case CHARACTER_SHEET_LIST_READ_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload as unknown
            };
        default:
            return state;
    }
};