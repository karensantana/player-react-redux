import React from 'react';
import {selectSong} from '../actions'; //If we don't specify the name of the file, the Webpack takes by default index file
import SongList from './SongList'

const App = () => {
    return(
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
                <SongList />
            </div>
        </div>
        
    </div>
    );
}

export default App;