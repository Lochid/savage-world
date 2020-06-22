import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/types';
import { getCharacterSheetName, getCharacterSheetPlayer, getCharacterSheetLoading, getCharacterSheetDone } from '../store/singleCharacterSheet/selectors';
import { updateCharacterSheetName, updateCharacterSheetPlayer, createCharacterSheet } from '../store/singleCharacterSheet/actionCreators';
import { clearCharSheetList } from '../store/characterSheets/actionCreators';

export default (props: any) => {
    const name = useSelector((state: State) => getCharacterSheetName(state));
    const player = useSelector((state: State) => getCharacterSheetPlayer(state));
    const loading = useSelector((state: State) => getCharacterSheetLoading(state));
    const done = useSelector((state: State) => getCharacterSheetDone(state));
    const dispatch = useDispatch();

    if (done && !loading) {
        dispatch(clearCharSheetList());
        const history = useHistory();
        history.goBack();
    }

    return loading ? null : (<div>
        <Link to="/char-sheet-list">Back</Link>
        <div>
            <span>Name: </span>
            <input value={name} onChange={(e) => dispatch(updateCharacterSheetName(e.target.value))} />
        </div>
        <div>
            <span>Player: </span>
            <input value={player} onChange={(e) => dispatch(updateCharacterSheetPlayer(e.target.value))} />
        </div>
        <button onClick={() => dispatch(createCharacterSheet({
            name,
            player
        }))}>Create</button>
    </div>)
}
