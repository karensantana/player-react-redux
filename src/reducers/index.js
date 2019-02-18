import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        { title: '7 rings', duration: '3:00'},
        { title: 'NASA', duration: '3:50'},
        { title: 'Fake Smile', duration: '2:00'},
        { title: 'Make up', duration: '4:00'}

    ]
}

const selectedSongReducer = (selectedSong = null, action ) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});