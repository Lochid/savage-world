import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/types';
import { getCharacterSheetList, getCharacterSheetListLoading } from '../store/characterSheets/selectors';
import { readCharSheetList } from '../store/characterSheets/actionCreators';

export default () => {
    const characterSheets = useSelector((state: State) => getCharacterSheetList(state));
    const loading = useSelector((state: State) => getCharacterSheetListLoading(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!characterSheets.length && !loading)
            dispatch(readCharSheetList());
    }, ['characterSheets', 'dispatch', 'loading']);

    return loading ? null : (<table>
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
                characterSheets.map((characterSheet) => (<tr key={characterSheet.id}>
                    <td>
                        {characterSheet.id}
                    </td>
                    <td>
                        {characterSheet.name}
                    </td>
                    <td>
                        {characterSheet.player}
                    </td>
                </tr>))
            }
        </tbody>
    </table>);
}