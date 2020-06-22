import {
    CHARACTER_SHEET_NAME_UPDATE,
    CHARACTER_SHEET_PLAYER_UPDATE,
    CHARACTER_SHEET_CREATE,
    CHARACTER_SHEET_CREATE_PENDING,
    CHARACTER_SHEET_CREATE_SUCCESS,
    CHARACTER_SHEET_CREATE_FAILED,
    CHARACTER_SHEET_CLEAR,
    CHARACTER_SHEET_UPDATE,
    CHARACTER_SHEET_UPDATE_PENDING,
    CHARACTER_SHEET_UPDATE_SUCCESS,
    CHARACTER_SHEET_UPDATE_FAILED,
} from "./actions";
import { Action } from "./types";
import { CharacterSheetUpdate, CharacterSheet } from "../../types/CharacterSheet";

export const updateCharacterSheetName = (name: string): Action => ({
    type: CHARACTER_SHEET_NAME_UPDATE,
    payload: name
});

export const updateCharacterSheetPlayer = (player: string): Action => ({
    type: CHARACTER_SHEET_PLAYER_UPDATE,
    payload: player
});

export const createCharacterSheet = (payload: CharacterSheetUpdate): Action => ({
    type: CHARACTER_SHEET_CREATE,
    payload
});

export const createCharacterSheetPending = (): Action => ({
    type: CHARACTER_SHEET_CREATE_PENDING
});

export const createCharacterSheetSuccess = (): Action => ({
    type: CHARACTER_SHEET_CREATE_SUCCESS,
});

export const createCharacterSheetFailed = (error: unknown): Action => ({
    type: CHARACTER_SHEET_CREATE_FAILED,
    payload: error
});

export const updateCharacterSheet = (payload: CharacterSheet): Action => ({
    type: CHARACTER_SHEET_UPDATE,
    payload
});

export const updateCharacterSheetPending = (): Action => ({
    type: CHARACTER_SHEET_UPDATE_PENDING
});

export const updateCharacterSheetSuccess = (): Action => ({
    type: CHARACTER_SHEET_UPDATE_SUCCESS,
});

export const updateCharacterSheetFailed = (error: unknown): Action => ({
    type: CHARACTER_SHEET_UPDATE_FAILED,
    payload: error
});

export const clearCharacterSheet = (): Action => ({
    type: CHARACTER_SHEET_CLEAR,
});
