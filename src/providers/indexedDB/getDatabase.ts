import migrations from './migrations';
import { dbName } from '../../app.config.json';

let db: IDBDatabase | null = null;

export const getDatabase = (): Promise<IDBDatabase> => {
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

export const getTransaction = (storeName: string, mode: 'readonly' | 'readwrite' = 'readonly'): Promise<IDBTransaction> =>
    getDatabase()
        .then(db => db.transaction(storeName, mode));

export const getObjectStore = (storeName: string, mode: 'readonly' | 'readwrite' = 'readonly'): Promise<IDBObjectStore> =>
    getTransaction(storeName, mode)
        .then(trx => trx.objectStore(storeName));

export const getAddRequest = <TData>(storeName: string, data: TData): Promise<IDBRequest<IDBValidKey>> =>
    getObjectStore(storeName, 'readwrite')
        .then(objectStore => objectStore.add(data));

export const getUpdateRequest = <TData>(storeName: string, data: TData): Promise<IDBRequest<IDBValidKey>> =>
    getObjectStore(storeName, 'readwrite')
        .then(objectStore => objectStore.put(data));


export const getReadRequest = (storeName: string): Promise<IDBRequest<any[]>> =>
    getObjectStore(storeName, 'readonly')
        .then(objectStore => objectStore.getAll());

export const getDeleteRequest = (storeName: string, id: number): Promise<IDBRequest<undefined>> =>
    getObjectStore(storeName, 'readwrite')
        .then(objectStore => objectStore.delete(id));

export const promisifyRequest = <T>(request: IDBRequest<T>): Promise<IDBRequest<T>> => new Promise<IDBRequest<T>>((resolve, reject) => {
    request.onerror = reject;
    request.onsuccess = () => resolve(request);
});


export const add = <T>(storeName: string, data: T): Promise<void> =>
    getAddRequest(storeName, data)
        .then(promisifyRequest)
        .then(() => { });


export const update = <T>(storeName: string, data: T): Promise<void> =>
    getUpdateRequest(storeName, data)
        .then(promisifyRequest)
        .then(() => { });


export const remove = (storeName: string, id: number): Promise<void> =>
    getDeleteRequest(storeName, id)
        .then(promisifyRequest)
        .then(() => { });


export const readAll = <T extends { id: number }>(storeName: string): Promise<{ [id: number]: T }> =>
    getReadRequest(storeName)
        .then((request: IDBRequest<any[]>) => promisifyRequest<any[]>(request))
        .then((request: IDBRequest<any[]>) => request.result)
        .then(characterSheets => characterSheets
            .reduce((acc: { [id: number]: T }, el: T): { [id: number]: T } => {
                acc[el.id] = el;
                return acc;
            }, {}));
