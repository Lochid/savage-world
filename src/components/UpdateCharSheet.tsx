import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { State } from '../store/types';
import { getCharacterSheetListLoading, getCharacterSheetById } from '../store/characterSheets/selectors';
import { readCharSheetList, clearCharSheetList } from '../store/characterSheets/actionCreators';
import { updateCharacterSheetName, updateCharacterSheetPlayer, updateCharacterSheet, clearCharacterSheet } from '../store/singleCharacterSheet/actionCreators';
import { getCharacterSheetName, getCharacterSheetPlayer, getCharacterSheetDone } from '../store/singleCharacterSheet/selectors';

export default () => {
    let { id } = useParams();
    const characterSheet = useSelector((state: State) => getCharacterSheetById(state)(id));
    const loading = useSelector((state: State) => getCharacterSheetListLoading(state));
    const done = useSelector((state: State) => getCharacterSheetDone(state));
    const name = useSelector((state: State) => getCharacterSheetName(state));
    const player = useSelector((state: State) => getCharacterSheetPlayer(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!characterSheet && !loading)
            dispatch(readCharSheetList());
    });

    if (characterSheet && !loading && name === '' && player === '') {
        dispatch(updateCharacterSheetName(characterSheet.name));
        dispatch(updateCharacterSheetPlayer(characterSheet.player));
    }

    if (done && !loading) {
        dispatch(clearCharSheetList());
        dispatch(clearCharacterSheet());
        const history = useHistory();
        history.goBack();
    }

    return !characterSheet || loading ? null : (<div>
        <Link to="/char-sheet-list">Back</Link>
        <div>
            <span>Name: </span>
            <input value={name} onChange={(e) => dispatch(updateCharacterSheetName(e.target.value))} />
        </div>
        <div>
            <span>Player: </span>
            <input value={player} onChange={(e) => dispatch(updateCharacterSheetPlayer(e.target.value))} />
        </div>
        <button onClick={() => dispatch(updateCharacterSheet({
            id,
            name,
            player
        }))}>Update</button>
    </div>)
}