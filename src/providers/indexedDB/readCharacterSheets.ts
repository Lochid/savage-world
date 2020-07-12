import { readAll } from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheet } from '../../types/CharacterSheet';

export default () => readAll<CharacterSheet>(characterSheets);