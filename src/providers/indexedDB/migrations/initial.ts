import { characterSheets } from "../storages";

export default (db: IDBDatabase) => {
    const objectStore = db.createObjectStore(characterSheets, {keyPath: 'id'});

    objectStore.createIndex("id", "id", { unique: true });
}