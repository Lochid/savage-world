import { Action, State } from "./types";
import {
    CHARACTER_SHEET_NAME_UPDATE,
    CHARACTER_SHEET_PLAYER_UPDATE,
    CHARACTER_SHEET_CREATE_PENDING,
    CHARACTER_SHEET_CREATE_SUCCESS,
    CHARACTER_SHEET_CREATE_FAILED,
    CHARACTER_SHEET_CLEAR,
    CHARACTER_SHEET_UPDATE_PENDING,
    CHARACTER_SHEET_UPDATE_SUCCESS,
    CHARACTER_SHEET_UPDATE_FAILED
} from "./actions";

const initialState: State = {
    id: -1,
    name: '',
    player: '',
    loading: false,
    done: false,
    error: undefined
}

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case CHARACTER_SHEET_NAME_UPDATE:
            return {
                ...state,
                name: action.payload as string
            };
        case CHARACTER_SHEET_PLAYER_UPDATE:
            return {
                ...state,
                player: action.payload as string
            };
        case CHARACTER_SHEET_CREATE_PENDING:
            return {
                ...state,
                loading: true,
                done: false,
            };
        case CHARACTER_SHEET_CREATE_SUCCESS:
            return {
                ...initialState,
                done: true
            };
        case CHARACTER_SHEET_CREATE_FAILED:
            return {
                ...state,
                loading: false,
            };
        case CHARACTER_SHEET_UPDATE_PENDING:
            return {
                ...state,
                loading: true,
                done: false,
            };
        case CHARACTER_SHEET_UPDATE_SUCCESS:
            return {
                ...initialState,
                done: true
            };
        case CHARACTER_SHEET_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
            };
        case CHARACTER_SHEET_CLEAR:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};