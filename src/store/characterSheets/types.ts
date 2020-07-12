import { CharacterSheet } from "../../types/CharacterSheet";

export interface CharacterSheetListReadAction {
    type: 'CHARACTER_SHEET_LIST_READ';
}

export interface CharacterSheetListReadPendingAction {
    type: 'CHARACTER_SHEET_LIST_READ_PENDING';
}

export interface CharacterSheetListReadSuccessAction {
    type: 'CHARACTER_SHEET_LIST_READ_SUCCESS';
    payload: { [id: number]: CharacterSheet };
}

export interface CharacterSheetListReadFailedAction {
    type: 'CHARACTER_SHEET_LIST_READ_FAILED';
    payload: unknown;
}

export interface CharacterSheetDeleteAction {
    type: 'CHARACTER_SHEET_DELETE';
    payload: number;
}

export interface CharacterSheetDeletePendingAction {
    type: 'CHARACTER_SHEET_DELETE_PENDING';
}

export interface CharacterSheetDeleteSuccessAction {
    type: 'CHARACTER_SHEET_DELETE_SUCCESS';
}

export interface CharacterSheetDeleteFailedAction {
    type: 'CHARACTER_SHEET_DELETE_FAILED';
    payload: unknown;
}

export interface CharacterSheetListClearAction {
    type: 'CHARACTER_SHEET_LIST_CLEAR';
}

export type Action = CharacterSheetListReadAction | CharacterSheetListReadPendingAction | CharacterSheetListReadSuccessAction | CharacterSheetListReadFailedAction
    | CharacterSheetDeleteAction | CharacterSheetDeletePendingAction | CharacterSheetDeleteSuccessAction | CharacterSheetDeleteFailedAction | CharacterSheetListClearAction;

export interface State {
    characterSheets: { [id: string]: CharacterSheet };
    loading: boolean;
    done: boolean;
    error: unknown;
}