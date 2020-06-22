import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../store/types';
import { getCharacterSheetList, getCharacterSheetListLoading, getCharacterSheetListDone } from '../store/characterSheets/selectors';
import { readCharSheetList, clearCharSheetList, deleteCharSheet } from '../store/characterSheets/actionCreators';

export default () => {
    const characterSheets = useSelector((state: State) => getCharacterSheetList(state));
    const loading = useSelector((state: State) => getCharacterSheetListLoading(state));
    const done = useSelector((state: State) => getCharacterSheetListDone(state));
    const dispatch = useDispatch();

    if (done && !loading) {
        dispatch(clearCharSheetList());
        dispatch(readCharSheetList());
    }

    useEffect(() => {
        if (!characterSheets.length && !loading)
            dispatch(readCharSheetList());
    }, []);

    return (<div>
        <table>
            <thead>
                <tr>
                    <td>
                        Id
                </td>
                    <td>
                        Character
                </td>
                    <td>
                        Player
                </td>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(characterSheets)
                        .map((key) => (<tr key={characterSheets[+key].id}>
                            <td>
                                <Link to={`/char-sheet/${characterSheets[+key].id}`}>{characterSheets[+key].id}</Link>
                            </td>
                            <td>
                                {characterSheets[+key].name}
                            </td>
                            <td>
                                {characterSheets[+key].player}
                            </td>
                            <td>
                                {<button onClick={() => dispatch(deleteCharSheet(characterSheets[+key].id))}>Delete</button>}
                            </td>
                        </tr>))
                }
            </tbody>
        </table>
        <Link to={`/create-char-sheet`}>Create Char Sheet</Link>
    </div>);
}