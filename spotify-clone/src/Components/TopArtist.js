import React, { useEffect, useState } from 'react';
import { napster , getArtistImage } from '../util';

const TopArtist = () => {

    const [artistList , setAlbumList] = useState([]);
    
    useEffect(() => {
        (async _ => {
            const response = await napster.get('/artists/top');
            setAlbumList(response.data.artists);
        })();
    },[]);

    return (
        <>
            <h3 class='text-2xl'>Top Artist</h3>
            <div class="flex flex-nowrap gap-4 mt-4 w-full overflow-x-auto">
                {artistList.map((singleArtist, idx) => {
                    return (
                        <div class="flex-none cursor-pointer  w-36" key={idx}>
                            <img class='p-1 hover:border-2 border-transparent hover:border-blue-400' 
                            src={getArtistImage(singleArtist.id)} />
                            <p class="m-0 text-sm text-gray-500">{singleArtist.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TopArtist;