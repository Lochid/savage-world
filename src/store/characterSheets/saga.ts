import { takeEvery, put, call } from 'redux-saga/effects'
import { readCharacterSheets, deleteCharacterSheet } from '../../providers';
import { CHARACTER_SHEET_LIST_READ, CHARACTER_SHEET_DELETE } from "./actions";
import {
    readCharSheetListPending, readCharSheetListFailed, readCharSheetListSuccess,
   deleteCharSheetPending, deleteCharSheetSuccess, deleteCharSheetFailed
} from './actionCreators'
import { CharacterSheet } from '../../types/CharacterSheet';

function* readCharacterSheetListAsync() {

    try {
        yield put(readCharSheetListPending());
        const data: CharacterSheet[] = yield call(readCharacterSheets);
        yield put(readCharSheetListSuccess(data));
    } catch (error) {
        yield put(readCharSheetListFailed(error));
    }
}

function* deleteCharacterSheetAsync({ payload }: { type: string, payload: number }) {

    try {
        yield put(deleteCharSheetPending());
        yield call(()=>deleteCharacterSheet(payload));
        yield put(deleteCharSheetSuccess());
    } catch (error) {
        yield put(deleteCharSheetFailed(error));
    }
}

export function* watchReadCharacterSheetList() {
    yield takeEvery(CHARACTER_SHEET_LIST_READ, readCharacterSheetListAsync);
}

export function* watchDeleteCharacterSheet() {
    yield takeEvery(CHARACTER_SHEET_DELETE, deleteCharacterSheetAsync);
}