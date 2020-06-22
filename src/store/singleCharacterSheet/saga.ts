import { takeEvery, put, call } from 'redux-saga/effects'
import { CHARACTER_SHEET_CREATE, CHARACTER_SHEET_UPDATE } from "./actions";
import {
    createCharacterSheetPending, createCharacterSheetSuccess, createCharacterSheetFailed,
    updateCharacterSheetPending,
    updateCharacterSheetSuccess,
    updateCharacterSheetFailed
} from './actionCreators';
import { createCharacterSheet } from '../../providers';
import { CharacterSheetUpdate, CharacterSheet } from '../../types/CharacterSheet';
import updateCharacterSheet from '../../providers/indexedDB/updateCharacterSheet';

function* createCharacterSheetAsync({ payload }: { type: string, payload: CharacterSheetUpdate }) {
    try {
        yield put(createCharacterSheetPending());
        yield call(() => createCharacterSheet(payload));
        yield put(createCharacterSheetSuccess());
    } catch (error) {
        yield put(createCharacterSheetFailed(error));
    }
}

function* updateCharacterSheetAsync({ payload }: { type: string, payload: CharacterSheet }) {
    try {
        yield put(updateCharacterSheetPending());
        yield call(() => updateCharacterSheet(payload));
        yield put(updateCharacterSheetSuccess());
    } catch (error) {
        yield put(updateCharacterSheetFailed(error));
    }
}

export function* watchCreateCharacterSheet() {
    yield takeEvery(CHARACTER_SHEET_CREATE, createCharacterSheetAsync);
}

export function* watchUpdateCharacterSheet() {
    yield takeEvery(CHARACTER_SHEET_UPDATE, updateCharacterSheetAsync);
}