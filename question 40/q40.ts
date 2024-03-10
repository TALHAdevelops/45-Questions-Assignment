//Making an object
interface Album{
    artist:string;
    title:string;
    tracks?:number;
}
function make_album(artist:string,title:string,tracks?:number,) {
    let album:Album = {
 artist,
 title,
    }
    if (tracks!==undefined){
        album.tracks=tracks;
    }
    return album
}
// now creating  3 more album
let album1: Album= make_album('talha anjum','mein',7);
let album2:Album= make_album('Jhokay','khana badosh',9);
let album3:Album=make_album('Unknown','None');
// now printing by console
console.log(album1);
console.log(album2);
console.log(album3);



