import initial from './initial';

export default (db: IDBDatabase) => {
    initial(db);
}