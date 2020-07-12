import {
    CharacterSheetListReadSuccessAction,
    CharacterSheetListReadFailedAction,
    CharacterSheetDeleteFailedAction,
    Action, State,
} from "./types";
import {
    CHARACTER_SHEET_LIST_READ_PENDING,
    CHARACTER_SHEET_LIST_READ_FAILED,
    CHARACTER_SHEET_LIST_READ_SUCCESS,
    CHARACTER_SHEET_LIST_CLEAR,
    CHARACTER_SHEET_DELETE_PENDING,
    CHARACTER_SHEET_DELETE_SUCCESS,
    CHARACTER_SHEET_DELETE_FAILED
} from "./actions";

const initialState: State = {
    loading: false,
    done: false,
    characterSheets: {},
    error: undefined
}

const characterSheetListReadPending = (state: State): State => ({
    ...state,
    loading: true
});

const characterSheetListReadSuccess = (state: State, action: CharacterSheetListReadSuccessAction): State => ({
    ...state,
    loading: false,
    characterSheets: action.payload,
});

const characterSheetListReadFailed = (state: State, action: CharacterSheetListReadFailedAction): State => ({
    ...state,
    loading: false,
    error: action.payload,
});

const characterSheetDeletePending = (state: State): State => ({
    ...state,
    loading: true
});

const characterSheetDeleteSuccess = (state: State): State => ({
    ...initialState,
    done: true
});

const characterSheetDeleteFailed = (state: State, action: CharacterSheetDeleteFailedAction): State => ({
    ...state,
    loading: false,
    error: action.payload,
});

const characterSheetListClear = (state: State): State => ({
    ...initialState
});


const reducers: { [type: string]: any } = {
    [CHARACTER_SHEET_LIST_READ_PENDING]: characterSheetListReadPending,
    [CHARACTER_SHEET_LIST_READ_SUCCESS]: characterSheetListReadSuccess,
    [CHARACTER_SHEET_LIST_READ_FAILED]: characterSheetListReadFailed,
    [CHARACTER_SHEET_DELETE_PENDING]: characterSheetDeletePending,
    [CHARACTER_SHEET_DELETE_SUCCESS]: characterSheetDeleteSuccess,
    [CHARACTER_SHEET_DELETE_FAILED]: characterSheetDeleteFailed,
    [CHARACTER_SHEET_LIST_CLEAR]: characterSheetListClear,
}

export default (state: State = initialState, action: Action): State =>
    reducers[action.type] ? reducers[action.type](state, action) : state;