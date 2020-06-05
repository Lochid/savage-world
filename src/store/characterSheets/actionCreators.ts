import { CHARACTER_SHEET_LIST_READ, CHARACTER_SHEET_LIST_READ_PENDING, CHARACTER_SHEET_LIST_READ_SUCCESS, CHARACTER_SHEET_LIST_READ_FAILED } from "./actions";
import { CharacterSheet } from "../../types/CharacterSheet";
import { Action } from "./types";

export const readCharSheetList = (): Action => ({
    type: CHARACTER_SHEET_LIST_READ
});

export const readCharSheetListPending = (): Action => ({
    type: CHARACTER_SHEET_LIST_READ_PENDING
});

export const readCharSheetListSuccess = (characterSheetList: CharacterSheet[]): Action => ({
    type: CHARACTER_SHEET_LIST_READ_SUCCESS,
    payload: characterSheetList
});

export const readCharSheetListFailed = (error: unknown): Action => ({
    type: CHARACTER_SHEET_LIST_READ_FAILED,
    payload: error
});
