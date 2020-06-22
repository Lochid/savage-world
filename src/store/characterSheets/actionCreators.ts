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

export const deleteCharSheet = (id: number): Action => ({
    type: CHARACTER_SHEET_DELETE,
    payload: id
});

export const deleteCharSheetPending = (): Action => ({
    type: CHARACTER_SHEET_DELETE_PENDING
});

export const deleteCharSheetSuccess = (): Action => ({
    type: CHARACTER_SHEET_DELETE_SUCCESS,
});

export const deleteCharSheetFailed = (error: unknown): Action => ({
    type: CHARACTER_SHEET_DELETE_FAILED,
    payload: error
});

export const clearCharSheetList = (): Action => ({
    type: CHARACTER_SHEET_LIST_CLEAR,
});