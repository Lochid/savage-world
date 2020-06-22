import { State } from './types';

export const getCharacterSheetName = ({ singleCharacterSheet }: { singleCharacterSheet: State }): string =>
    singleCharacterSheet?.name ?? {};

export const getCharacterSheetPlayer = ({ singleCharacterSheet }: { singleCharacterSheet: State }): string =>
    singleCharacterSheet?.player ?? {};

export const getCharacterSheetLoading = ({ singleCharacterSheet }: { singleCharacterSheet: State }): boolean =>
    singleCharacterSheet?.loading;

export const getCharacterSheetDone = ({ singleCharacterSheet }: { singleCharacterSheet: State }): boolean =>
    singleCharacterSheet?.done;
