import getDatabase from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheet } from '../../types/CharacterSheet';

export default async (charSheet: CharacterSheet): Promise<void> => {
    const db = await getDatabase();

    const transaction = db.transaction(characterSheets, 'readwrite');
    const objectStore = transaction.objectStore(characterSheets);

    const request = objectStore.put(charSheet);

    return new Promise<void>((resolve, reject) => {
        request.onerror = function (event) {
            reject(event);
        };
        request.onsuccess = function (event) {
            resolve();
        };
    });
}