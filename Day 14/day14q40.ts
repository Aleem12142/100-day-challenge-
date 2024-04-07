function make_album(artist: string, title: string, tracks?: number) {
    let album:{artist: string, title: string, tracks?: number} = { artist, title};
    if (tracks){
        album.tracks = tracks;
    } 
    return album;
}

console.log(make_album('Artist One', 'The First ALbum'));
console.log(make_album('The Artist Two', 'The Second Album'));
console.log(make_album('The Artist Third', 'The Third Album', 15));
console.log(make_album('The Artist Fourth', 'The FOurth Album', 30));
