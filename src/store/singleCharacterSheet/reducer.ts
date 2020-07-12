import {
    Action,
    State,
    CharacterSheetNameUpdateAction,
    CharacterSheetPlayerUpdateAction,
    CharacterSheetCreatePendingAction,
    CharacterSheetCreateSuccessAction,
    CharacterSheetCreateFailedAction,
    CharacterSheetUpdatePendingAction,
    CharacterSheetUpdateSuccessAction,
    CharacterSheetUpdateFailedAction,
    CharacterSheetClearAction
} from "./types";
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
const updateCharacterSheetName = (state: State, action: CharacterSheetNameUpdateAction): State => ({
    ...state,
    name: action.payload
});

const updateCharacterSheetPlayer = (state: State, action: CharacterSheetPlayerUpdateAction): State => ({
    ...state,
    player: action.payload
});

const createCharacterSheetPending = (state: State, action: CharacterSheetCreatePendingAction): State => ({
    ...state,
    loading: true,
    done: false,
});

const createCharacterSheetSuccess = (state: State, action: CharacterSheetCreateSuccessAction): State => ({
    ...initialState,
    done: true
});

const createCharacterSheetFailed = (state: State, action: CharacterSheetCreateFailedAction): State => ({
    ...state,
    loading: false,
    error: action.payload
});

const updateCharacterSheetPending = (state: State, action: CharacterSheetUpdatePendingAction): State => ({
    ...state,
    loading: true,
    done: false,
});

const updateCharacterSheetSuccess = (state: State, action: CharacterSheetUpdateSuccessAction): State => ({
    ...initialState,
    done: true
});

const updateCharacterSheetFailed = (state: State, action: CharacterSheetUpdateFailedAction): State => ({
    ...state,
    loading: false,
    error: action.payload
});

const clearCharacterSheet = (state: State, action: CharacterSheetClearAction): State => ({
    ...initialState,
});

const reducers: { [type: string]: any } = {

    [CHARACTER_SHEET_NAME_UPDATE]: updateCharacterSheetName,
    [CHARACTER_SHEET_PLAYER_UPDATE]: updateCharacterSheetPlayer,
    [CHARACTER_SHEET_CREATE_PENDING]: createCharacterSheetPending,
    [CHARACTER_SHEET_CREATE_SUCCESS]: createCharacterSheetSuccess,
    [CHARACTER_SHEET_CREATE_FAILED]: createCharacterSheetFailed,
    [CHARACTER_SHEET_UPDATE_PENDING]: updateCharacterSheetPending,
    [CHARACTER_SHEET_UPDATE_SUCCESS]: updateCharacterSheetSuccess,
    [CHARACTER_SHEET_UPDATE_FAILED]: updateCharacterSheetFailed,
    [CHARACTER_SHEET_CLEAR]: clearCharacterSheet,
}

export default (state: State = initialState, action: Action): State =>
    reducers[action.type] ? reducers[action.type](state, action) : state;