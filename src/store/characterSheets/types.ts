import { CharacterSheet } from "../../types/CharacterSheet";

export interface State {
    characterSheets: CharacterSheet[];
    loading: boolean;
    error: unknown;
}

export interface Action {
    type: string;
    payload?: CharacterSheet[] | unknown
}
