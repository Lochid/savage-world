import { characterSheets } from "../storages";

export default (db: IDBDatabase) => {
    const objectStore = db.createObjectStore(characterSheets, { keyPath: 'id', autoIncrement: true });

    objectStore.createIndex("id", "id", { unique: true });
}