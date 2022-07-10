import React from 'react';
import TopAlbums from '../Components/TopAlbums';
import TopArtist from '../Components/TopArtist';
import TopSongs from '../Components/TopSongs';

const Home = () => {
    return (
        <>
            <div className='container pl-2'>
                <h1 class="text-3xl font-semibold">Home Page</h1>
                <br/>
                <TopSongs />
                <br/>
                <TopAlbums/>
                <br/>
                <TopArtist />
                <br/>
            </div>
        </>
    )
}

export default Home;