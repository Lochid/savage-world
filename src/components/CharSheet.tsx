import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { State } from '../store/types';
import { getCharacterSheetListLoading, getCharacterSheetById } from '../store/characterSheets/selectors';
import { readCharSheetList } from '../store/characterSheets/actionCreators';

export default () => {
    let { id } = useParams();
    const characterSheet = useSelector((state: State) => getCharacterSheetById(state)(id));
    const loading = useSelector((state: State) => getCharacterSheetListLoading(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!characterSheet && !loading)
            dispatch(readCharSheetList());
    });

    return !characterSheet || loading ? null : (<div>
        <Link to="/char-sheet-list">Back</Link>
        <div>
            <span>Name: </span>
            <span>{characterSheet.name}</span>
        </div>
        <div>
            <span>Player: </span>
            <span>{characterSheet.player}</span>
        </div>
        <Link to={`/update-char-sheet/${characterSheet.id}`}>Update</Link>
    </div>)
}