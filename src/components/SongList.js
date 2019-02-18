import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render(){
        console.log();
        return (
            <div> Hello World</div>
        );
    }
}

const mapStateToProps = (state) => {
 
   return { songs: state.songs}; 
}

export default connect(mapStateToProps)(SongList);    //The first connect()returns a function and then with () again we invoke the function that was returned.