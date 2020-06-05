import getDatabase from './getDatabase';
import { characterSheets } from './storages';
import { CharacterSheet } from '../../types/CharacterSheet';

export default async ():Promise<CharacterSheet[]> => {
    const db = await getDatabase();

    const transaction = db.transaction(characterSheets);
    const objectStore = transaction.objectStore(characterSheets);
    const request = objectStore.getAll();

    return new Promise((resolve, reject)=>{
        request.onerror = function (event) {
            reject(event);
        };
        request.onsuccess = function (event) {
            resolve(request.result as CharacterSheet[]);
        };
    });
}