import { add } from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheetUpdate } from '../../types/CharacterSheet';

export default (charSheet: CharacterSheetUpdate) => add(characterSheets, charSheet);
