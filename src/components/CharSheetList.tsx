import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../store/types';
import { getCharacterSheetList, getCharacterSheetListLoading, getCharacterSheetListDone } from '../store/characterSheets/selectors';
import { readCharSheetList, clearCharSheetList, deleteCharSheet } from '../store/characterSheets/actionCreators';
import { Row } from './Row';
import { Cell } from './Cell';

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
        <Row>
            <Cell>
                Id
            </Cell>
            <Cell>
                Character
            </Cell>
            <Cell>
                Player
            </Cell>
            <Cell>
            </Cell>
        </Row>
        {
            Object.keys(characterSheets)
                .map((key) => (<Row key={characterSheets[+key].id}>
                    <Cell>
                        <Link to={`/char-sheet/${characterSheets[+key].id}`}>{characterSheets[+key].id}</Link>
                    </Cell>
                    <Cell>
                        {characterSheets[+key].name}
                    </Cell>
                    <Cell>
                        {characterSheets[+key].player}
                    </Cell>
                    <Cell>
                        {<button onClick={() => dispatch(deleteCharSheet(characterSheets[+key].id))}>Delete</button>}
                    </Cell>
                </Row>))
        }
        <Link to={`/create-char-sheet`}>Create Char Sheet</Link>
    </div>);
}