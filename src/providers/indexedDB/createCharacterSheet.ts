import getDatabase from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheetUpdate } from '../../types/CharacterSheet';

export default async (charSheet: CharacterSheetUpdate): Promise<void> => {
    const db = await getDatabase();

    const transaction = db.transaction(characterSheets, 'readwrite');
    const objectStore = transaction.objectStore(characterSheets);

    const request = objectStore.add(charSheet);

    return new Promise<void>((resolve, reject) => {
        request.onerror = function (event) {
            reject(event);
        };
        request.onsuccess = function (event) {
            resolve();
        };
    });
}