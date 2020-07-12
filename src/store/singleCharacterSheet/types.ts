import { CharacterSheet, CharacterSheetUpdate } from "../../types/CharacterSheet";

export interface CharacterSheetNameUpdateAction {
    type: 'CHARACTER_SHEET_NAME_UPDATE';
    payload: string;
}

export interface CharacterSheetPlayerUpdateAction {
    type: 'CHARACTER_SHEET_PLAYER_UPDATE';
    payload: string;
}


export interface CharacterSheetCreateAction {
    type: 'CHARACTER_SHEET_CREATE';
    payload: CharacterSheetUpdate;
}
export interface CharacterSheetCreatePendingAction {
    type: 'CHARACTER_SHEET_CREATE_PENDING';
}

export interface CharacterSheetCreateSuccessAction {
    type: 'CHARACTER_SHEET_CREATE_SUCCESS';
}

export interface CharacterSheetCreateFailedAction {
    type: 'CHARACTER_SHEET_CREATE_FAILED';
    payload: unknown;
}


export interface CharacterSheetUpdateAction {
    type: 'CHARACTER_SHEET_UPDATE';
    payload: CharacterSheet;
}
export interface CharacterSheetUpdatePendingAction {
    type: 'CHARACTER_SHEET_UPDATE_PENDING';
}

export interface CharacterSheetUpdateSuccessAction {
    type: 'CHARACTER_SHEET_UPDATE_SUCCESS';
}

export interface CharacterSheetUpdateFailedAction {
    type: 'CHARACTER_SHEET_UPDATE_FAILED';
    payload: unknown;
}

export interface CharacterSheetClearAction {
    type: 'CHARACTER_SHEET_CLEAR';
}


export type Action = CharacterSheetNameUpdateAction | CharacterSheetPlayerUpdateAction |
    CharacterSheetCreateAction | CharacterSheetCreatePendingAction | CharacterSheetCreateSuccessAction | CharacterSheetCreateFailedAction |
    CharacterSheetUpdateAction | CharacterSheetUpdatePendingAction | CharacterSheetUpdateSuccessAction | CharacterSheetUpdateFailedAction | CharacterSheetClearAction;

export type State = CharacterSheet & {
    loading: boolean;
    done: boolean;
    error: unknown;
}