import React from 'react';
import { connect } from 'react-redux';
import { selectSong} from '../actions'

class SongList extends React.Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <buttom className="ui button primary">
                            Select
                        </buttom>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render(){
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
   return { songs: state.songs}; 
}

export default connect(mapStateToProps)(SongList);    //The first connect()returns a function and then with () again we invoke the function that was returned.