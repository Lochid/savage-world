import { State as CharacterSheetsState } from "./characterSheets/types";
import { State as SingleCharacterSheetState } from "./singleCharacterSheet/types";

export interface State {
    characterSheets: CharacterSheetsState;
    singleCharacterSheet: SingleCharacterSheetState;
}