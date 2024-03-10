"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// now creating  3 more album
let album1 = make_album('talha anjum', 'mein', 7);
let album2 = make_album('Jhokay', 'khana badosh', 9);
let album3 = make_album('Unknown', 'None');
// now printing by console
console.log(album1);
console.log(album2);
console.log(album3);
