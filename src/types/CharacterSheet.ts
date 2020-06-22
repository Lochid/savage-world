export interface CharacterSheet {
    id: number;
    name: string;
    player: string;
}

export type CharacterSheetUpdate = Pick<CharacterSheet, 'name' | 'player'>;