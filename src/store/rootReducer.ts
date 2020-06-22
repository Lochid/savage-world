import { combineReducers } from 'redux';
import { reducer as characterSheets } from './characterSheets';
import { reducer as singleCharacterSheet } from './singleCharacterSheet';

export default combineReducers({
    characterSheets,
    singleCharacterSheet
});