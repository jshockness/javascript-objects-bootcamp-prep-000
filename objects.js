var playlist = {
  'Jay Z': '99 Problems',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}