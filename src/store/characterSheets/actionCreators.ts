import {
    CharacterSheetListReadAction,
    CharacterSheetListReadPendingAction,
    CharacterSheetListReadSuccessAction,
    CharacterSheetListReadFailedAction,
    CharacterSheetDeleteAction,
    CharacterSheetDeletePendingAction,
    CharacterSheetDeleteSuccessAction,
    CharacterSheetDeleteFailedAction,
    CharacterSheetListClearAction,
} from "./types";
import {
    CHARACTER_SHEET_LIST_READ,
    CHARACTER_SHEET_LIST_READ_PENDING,
    CHARACTER_SHEET_LIST_READ_SUCCESS,
    CHARACTER_SHEET_LIST_READ_FAILED,
    CHARACTER_SHEET_DELETE,
    CHARACTER_SHEET_DELETE_PENDING,
    CHARACTER_SHEET_DELETE_SUCCESS,
    CHARACTER_SHEET_DELETE_FAILED,
    CHARACTER_SHEET_LIST_CLEAR
} from "./actions";
import { CharacterSheet } from "../../types/CharacterSheet";

export const readCharSheetList = (): CharacterSheetListReadAction => ({
    type: CHARACTER_SHEET_LIST_READ
});

export const readCharSheetListPending = (): CharacterSheetListReadPendingAction => ({
    type: CHARACTER_SHEET_LIST_READ_PENDING
});

export const readCharSheetListSuccess = (characterSheetList: CharacterSheet[]): CharacterSheetListReadSuccessAction => ({
    type: CHARACTER_SHEET_LIST_READ_SUCCESS,
    payload: characterSheetList
});

export const readCharSheetListFailed = (error: unknown): CharacterSheetListReadFailedAction => ({
    type: CHARACTER_SHEET_LIST_READ_FAILED,
    payload: error
});

export const deleteCharSheet = (id: number): CharacterSheetDeleteAction => ({
    type: CHARACTER_SHEET_DELETE,
    payload: id
});

export const deleteCharSheetPending = (): CharacterSheetDeletePendingAction => ({
    type: CHARACTER_SHEET_DELETE_PENDING
});

export const deleteCharSheetSuccess = (): CharacterSheetDeleteSuccessAction => ({
    type: CHARACTER_SHEET_DELETE_SUCCESS,
});

export const deleteCharSheetFailed = (error: unknown): CharacterSheetDeleteFailedAction => ({
    type: CHARACTER_SHEET_DELETE_FAILED,
    payload: error
});

export const clearCharSheetList = (): CharacterSheetListClearAction => ({
    type: CHARACTER_SHEET_LIST_CLEAR,
});