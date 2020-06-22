import { Action, State } from "./types";
import {
    CHARACTER_SHEET_LIST_READ_PENDING,
    CHARACTER_SHEET_LIST_READ_FAILED,
    CHARACTER_SHEET_LIST_READ_SUCCESS,
    CHARACTER_SHEET_LIST_CLEAR,
    CHARACTER_SHEET_DELETE_PENDING,
    CHARACTER_SHEET_DELETE_SUCCESS,
    CHARACTER_SHEET_DELETE_FAILED
} from "./actions";
import { CharacterSheet } from "../../types/CharacterSheet";

const initialState: State = {
    loading: false,
    done: false,
    characterSheets: {},
    error: undefined
}

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case CHARACTER_SHEET_LIST_CLEAR:
            return {
                ...initialState
            };
        case CHARACTER_SHEET_LIST_READ_PENDING:
            return {
                ...state,
                loading: true
            };
        case CHARACTER_SHEET_LIST_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                characterSheets: action.payload as { [id: string]: CharacterSheet },
            };
        case CHARACTER_SHEET_LIST_READ_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload as unknown
            };
        case CHARACTER_SHEET_DELETE_PENDING:
            return {
                ...state,
                loading: true,
                done: false,
            };
        case CHARACTER_SHEET_DELETE_SUCCESS:
            return {
                ...initialState,
                done: true
            };
        case CHARACTER_SHEET_DELETE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};