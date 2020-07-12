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
import { 
    CharacterSheetNameUpdateAction, 
    CharacterSheetPlayerUpdateAction,
    CharacterSheetCreateAction,
    CharacterSheetCreatePendingAction,
    CharacterSheetCreateSuccessAction,
    CharacterSheetCreateFailedAction,
    CharacterSheetUpdateAction,
    CharacterSheetUpdatePendingAction,
    CharacterSheetUpdateSuccessAction,
    CharacterSheetUpdateFailedAction,
    CharacterSheetClearAction
} from "./types";
import { CharacterSheetUpdate, CharacterSheet } from "../../types/CharacterSheet";

export const updateCharacterSheetName = (name: string): CharacterSheetNameUpdateAction => ({
    type: CHARACTER_SHEET_NAME_UPDATE,
    payload: name
});

export const updateCharacterSheetPlayer = (player: string): CharacterSheetPlayerUpdateAction => ({
    type: CHARACTER_SHEET_PLAYER_UPDATE,
    payload: player
});

export const createCharacterSheet = (payload: CharacterSheetUpdate): CharacterSheetCreateAction => ({
    type: CHARACTER_SHEET_CREATE,
    payload
});

export const createCharacterSheetPending = (): CharacterSheetCreatePendingAction => ({
    type: CHARACTER_SHEET_CREATE_PENDING
});

export const createCharacterSheetSuccess = (): CharacterSheetCreateSuccessAction => ({
    type: CHARACTER_SHEET_CREATE_SUCCESS,
});

export const createCharacterSheetFailed = (error: unknown): CharacterSheetCreateFailedAction => ({
    type: CHARACTER_SHEET_CREATE_FAILED,
    payload: error
});

export const updateCharacterSheet = (payload: CharacterSheet): CharacterSheetUpdateAction => ({
    type: CHARACTER_SHEET_UPDATE,
    payload
});

export const updateCharacterSheetPending = (): CharacterSheetUpdatePendingAction => ({
    type: CHARACTER_SHEET_UPDATE_PENDING
});

export const updateCharacterSheetSuccess = (): CharacterSheetUpdateSuccessAction => ({
    type: CHARACTER_SHEET_UPDATE_SUCCESS,
});

export const updateCharacterSheetFailed = (error: unknown): CharacterSheetUpdateFailedAction => ({
    type: CHARACTER_SHEET_UPDATE_FAILED,
    payload: error
});

export const clearCharacterSheet = (): CharacterSheetClearAction => ({
    type: CHARACTER_SHEET_CLEAR,
});
