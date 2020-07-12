import { update } from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheet } from '../../types/CharacterSheet';

export default  (charSheet: CharacterSheet) => update(characterSheets, charSheet);