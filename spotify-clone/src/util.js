import axios from "axios";

const napster = axios.create({
    baseURL : 'https://api.napster.com/v2.2',
    timeout : 10000,
    params : {
        apikey : process.env.REACT_APP_API_KEY
    }
});

const getAlbumImage = albumId => {
    return `https://api.napster.com/imageserver/v2/albums/${albumId}/images/150x150.jpg`
}

const getArtistImage = artistId => {
    return `https://api.napster.com/imageserver/v2/artists/${artistId}/images/150x100.jpg`
}


export { napster , getAlbumImage , getArtistImage};

// https://api.napster.com/imageserver/v2/artists/{artist_id}/images/{size}.{extension}

// https://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
// ZTg2MDRjYWEtYWNiMy00YWRlLWEyMmYtOTg4NDY1OGIwMDI4

// https://developer.prod.napster.com/api/v2.2#artist-images