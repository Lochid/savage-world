import { takeEvery, put, call } from 'redux-saga/effects'
import { readCharacterSheets } from '../../providers';
import { CHARACTER_SHEET_LIST_READ } from "./actions";
import { readCharSheetListPending, readCharSheetListFailed, readCharSheetListSuccess } from './actionCreators'
import { CharacterSheet } from '../../types/CharacterSheet';

function* readCharacterSheetListAsync() {
    
    console.log('==============================');
    try {
        yield put(readCharSheetListPending());
        const data: CharacterSheet[] = yield call(readCharacterSheets);
        yield put(readCharSheetListSuccess(data));
    } catch (error) {
        yield put(readCharSheetListFailed(error));
    }
}

export function* watchReadCharacterSheetList() {
    yield takeEvery(CHARACTER_SHEET_LIST_READ, readCharacterSheetListAsync);
}