var playlist = {
  'Slowdrive': 'Alison',
  'My Bloody Valentine': ''
}

function updatePlaylist(playlist, artist, song) {
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}