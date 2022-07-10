import React, { useEffect, useState } from 'react';
import { napster , getAlbumImage } from '../util';

const TopAlbums = () => {

    const [albumList , setAlbumList] = useState([]);

    useEffect(() => {
        (async _ => {
            const response = await napster.get('/albums/top');
            setAlbumList(response.data.albums);
        })()
    },[]);

    return (
        <>
            <h3 class='text-2xl'>Top Albums</h3>
            <div class="flex flex-nowrap gap-4 mt-4 w-full overflow-x-auto mb-4">
                {albumList.map((singleAlbum , idx) => {
                    return (
                        <div class="flex-none cursor-pointer w-32" key={idx}>
                            <img className='p-2  hover:border-2 hover:border-blue-400' src={getAlbumImage(singleAlbum.id)} />
                            <p class="m-0 text-sm text-gray-500">{singleAlbum.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TopAlbums