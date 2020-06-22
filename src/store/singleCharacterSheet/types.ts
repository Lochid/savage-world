import { CharacterSheet, CharacterSheetUpdate } from "../../types/CharacterSheet";

export type State = CharacterSheet & {
    loading: boolean;
    done: boolean;
    error: unknown;
}

export interface Action {
    type: string;
    payload?: string | CharacterSheetUpdate | unknown
}
