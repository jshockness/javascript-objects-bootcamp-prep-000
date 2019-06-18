var playlist = {
  'Slowdrive': '',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}