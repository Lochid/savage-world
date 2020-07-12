import { State } from './types';
import { CharacterSheet } from '../../types/CharacterSheet';

export const getCharacterSheetList = ({ characterSheets }: { characterSheets: State }): { [id: string]: CharacterSheet } =>
    characterSheets?.characterSheets ?? {};

export const getCharacterSheetById = ({ characterSheets }: { characterSheets: State }) => (id: string | number): CharacterSheet | null =>
    characterSheets?.characterSheets ? characterSheets?.characterSheets[id] : null;

export const getCharacterSheetListLoading = ({ characterSheets }: { characterSheets: State }): boolean =>
    characterSheets?.loading;

export const getCharacterSheetListDone = ({ characterSheets }: { characterSheets: State }): boolean =>
    characterSheets?.done;