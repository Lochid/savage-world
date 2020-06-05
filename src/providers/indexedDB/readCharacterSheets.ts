import getDatabase from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheet } from '../../types/CharacterSheet';

export default async (): Promise<{ [id: string]: CharacterSheet }> => {
    const db = await getDatabase();

    const transaction = db.transaction(characterSheets);
    const objectStore = transaction.objectStore(characterSheets);
    const request = objectStore.getAll();

    return new Promise<CharacterSheet[]>((resolve, reject) => {
        request.onerror = function (event) {
            reject(event);
        };
        request.onsuccess = function (event) {
            resolve(request.result as CharacterSheet[]);
        };
    })
        .then(characterSheets => characterSheets
            .reduce((acc: { [id: string]: CharacterSheet }, el: CharacterSheet): { [id: string]: CharacterSheet } => {
                acc[el.id] = el;
                return acc;
            }, {}));
}