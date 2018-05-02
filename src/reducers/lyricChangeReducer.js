import c from './../constants'

export default (state = {
  songList: {},
  currentSong: null
}, action) => {
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;
  let currentSong;
  let songsStateSlice; 
  switch (action.type) {
    case c.SET_SONG_SELECTION:
      currentSong = action.songId;
      songsStateSlice = Object.assign({}, state, {currentSong: currentSong});
      return songsStateSlice;
    case c.REQUEST_SONG:
      newSongsByIdEntry = {
        isFetching: true,
        title: action.title,
        songId: action.songId
      }
      newSongsByIdStateSlice = Object.assign({}, state);
      newSongsByIdStateSlice['songList'][action.songId] = newSongsByIdEntry;
      return newSongsByIdStateSlice;
    case c.RECEIVE_SONG:
      newSongsByIdEntry = Object.assign({}, state.songList[action.songId], {
        isFetching: false,
        receivedAt: action.receivedAt,
        title: action.title,
        artist: action.artist,
        songArray: action.songArray,
        arrayPosition: 0,
        songId: action.songId
      });
      newSongsByIdStateSlice = Object.assign({}, state);
      newSongsByIdStateSlice.songList[action.songId] = newSongsByIdEntry;
      return newSongsByIdStateSlice;
    default:
      return state;
  }
}
