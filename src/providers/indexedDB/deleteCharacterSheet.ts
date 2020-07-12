import { remove } from './getDatabase';
import { characterSheets } from './storages';

export default  (id: number) => remove(characterSheets, id);
