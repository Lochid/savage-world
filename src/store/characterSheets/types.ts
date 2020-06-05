import { CharacterSheet } from "../../types/CharacterSheet";

export interface State {
    characterSheets: { [id: string]: CharacterSheet };
    loading: boolean;
    error: unknown;
}

export interface Action {
    type: string;
    payload?: { [id: string]: CharacterSheet } | unknown
}
