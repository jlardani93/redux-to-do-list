import * as types from './../constants/ActionTypes'
import * as toDoListActions from './ToDoListActions'
import * as completedActionsActions from './CompletedActionsActions'
import v4 from 'uuid'

export const increment = completedActionsActions.increment
export const addItem = toDoListActions.addItem
export const removeItem = toDoListActions.removeItem
export const updateTimes = toDoListActions.updateTimes
export const setActiveItem = toDoListActions.setActiveItem
export const updateItem = toDoListActions.updateItem

export const setSongSelection = (songId) => ({
  type: types.SET_SONG_SELECTION,
  songId
})

export function fetchSongId(title) {
  return function (dispatch) {
    const localSongId = v4()
    dispatch(requestSong(title, localSongId))
    title = title.replace(' ', '_')
    return fetch(`http://api.musixmatch.com/ws/1.1/track.search?&q_track=${title}&page_size=1&s_track_rating=desc&apikey=ab87d1129f299dd4a3bc98152eab8d1e`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(function(json){
        if (json.message.body.track_list.length > 0) {
          const musicMatchId = json.message.body.track_list[0].track.track_id;
          const title = json.message.body.track_list[0].track.track_name;
          const artist = json.message.body.track_list[0].track.artist_name;
          fetchLyrics(title, artist, musicMatchId, localSongId, dispatch);
        } else {
          console.log('We couldn\'t locate a song under that ID!');
        }
    })
  }
}

export function fetchLyrics(title, artist, musicMatchId, localSongId, dispatch) {
  return fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${musicMatchId}&apikey=ab87d1129f299dd4a3bc98152eab8d1e`)
  .then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    if (json.message.body.lyrics) {
      let lyrics = json.message.body.lyrics.lyrics_body;
      lyrics = lyrics.replace('"', '');
      const songArray = lyrics.split(/\n/g).filter(entry => entry!="");
      dispatch(receiveSong(title, artist, localSongId, songArray));
    } else {
      console.log('We couldn\'t locate lyrics for this song!');
    }
  })
}

export const requestSong = (title, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  songId: localSongId
})

export const receiveSong = (title, artist, songId, songArray) => ({
  type: types.RECEIVE_SONG,
  songId,
  title,
  artist,
  songArray,
  receivedAt: Date.now()
})
