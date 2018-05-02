import React from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions'
import PropTypes from 'prop-types'

function MusicInterface(props){
  console.log("This is props in MusicInterface");

  let _songTitle

  function handleFormSubmit(event){
    event.preventDefault()
    const { dispatch } = props
    if (!_songTitle.value.trim()){
      return
    }
    dispatch(actions.fetchSongId(_songTitle.value.trim()))
    _songTitle.value = '';
  }

  function handleSongSelection(songId){
    const { dispatch } = props
    dispatch(actions.setSongSelection(songId))
  }

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Input Name of Song</label>
        <input
          type="text"
          id="songTitle"
          ref={(input) => {_songTitle = input}}></input>
        <button type="submit">Search for Lyrics</button>
      </form>
      <div>
        <h3>Available Songs: {props.length}</h3>
        <h3>Current Song: {props.currentSong}</h3>
        {(!(props.songArray.length === 0))
        ? props.songArray.map(song =>
          <h4 key={song.songId} onClick={()=>{handleSongSelection(song.songId)}}>{song.title}</h4>)
        : <span>There are currently no songs in your library</span>}
      </div>
      <div>
        <h2>Song Lyrics</h2>
        {(props.currentSong)
          ? props.songList[props.currentSong].songArray.map(lyric=>
          <h3>{lyric}</h3>)
          : <span></span>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    songList: state.songs.songList,
    songArray: [...(Object.values(state.songs.songList))],
    currentSong: state.songs.currentSong
  }
  // const song = state.songsById[state.currentSongId]
}

MusicInterface.propTypes = {
  dispatch: PropTypes.func,
  songList: PropTypes.array,
}

export default connect(mapStateToProps)(MusicInterface)
