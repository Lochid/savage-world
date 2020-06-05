import migrations from './migrations';
import { dbName } from '../../app.config.json';

let db: IDBDatabase | null = null;

export default (): Promise<IDBDatabase> => {
    if (db !== null) {
        return Promise.resolve(db);
    }
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(dbName, 2);

        request.onsuccess = (event: Event) => {
            resolve((event?.target as IDBOpenDBRequest)?.result);
        }

        request.onerror = (event: Event) => {
            reject(new Error('DB error'));
        };
        request.onupgradeneeded = (event: Event) => {
            const db = (event?.target as IDBOpenDBRequest)?.result;

            migrations(db);
        };
    });
};