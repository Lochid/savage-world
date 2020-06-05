import { State } from './types';
import { CharacterSheet } from '../../types/CharacterSheet';

export const getCharacterSheetList = ({ characterSheets }: { characterSheets: State }): CharacterSheet[] =>
    characterSheets?.characterSheets ?? [];

export const getCharacterSheetListLoading = ({ characterSheets }: { characterSheets: State }): boolean =>
    characterSheets?.loading;

