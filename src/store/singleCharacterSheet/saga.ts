import { takeEvery, put, call } from 'redux-saga/effects'
import { CHARACTER_SHEET_CREATE } from "./actions";
import { createCharacterSheetPending, createCharacterSheetSuccess, createCharacterSheetFailed } from './actionCreators';
import { createCharacterSheet } from '../../providers';
import { CharacterSheetUpdate } from '../../types/CharacterSheet';

function* createCharacterSheetAsync({ payload }: { type: string, payload: CharacterSheetUpdate }) {
    try {
        yield put(createCharacterSheetPending());
        yield call(() => createCharacterSheet(payload));
        yield put(createCharacterSheetSuccess());
    } catch (error) {
        yield put(createCharacterSheetFailed(error));
    }
}

export function* watchCreateCharacterSheet() {
    yield takeEvery(CHARACTER_SHEET_CREATE, createCharacterSheetAsync);
}