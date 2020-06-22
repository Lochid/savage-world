import getDatabase from './getDatabase';
import { characterSheets } from './storages';

export default async (id: number): Promise<void> => {
    const db = await getDatabase();

    const transaction = db.transaction(characterSheets, 'readwrite');
    const objectStore = transaction.objectStore(characterSheets);
    const request = objectStore.delete(id);

    return new Promise<void>((resolve, reject) => {
        request.onerror = function (event) {
            reject(event);
        };
        request.onsuccess = function (event) {
            resolve();
        };
    });
}