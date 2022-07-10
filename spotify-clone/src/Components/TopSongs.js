import React, { useEffect, useState } from 'react';
import { napster, getAlbumImage } from '../util';
import { useDispatch } from 'react-redux';
import { changePlayerTrack } from '../slice';

const TopSongs = () => {
    const dispatch = useDispatch();
    const [trackList, setTrackList] = useState([]);

    useEffect(() => {
        (async _ => {
            const response = await napster.get('/tracks/top')
            setTrackList(response.data.tracks);
        })();
    }, []);

    return (
        <>
            <h3 class='text-2xl'>Top Songs</h3>
            <div class="flex flex-nowrap gap-4 mt-4 w-full overflow-x-auto">
                {trackList.map((singleTrack, idx) => {
                    return (
                        <div class="flex-none cursor-pointer w-32 " key={idx} onClick={_ => dispatch(changePlayerTrack(singleTrack.id))}>
                            <img className=' p-2 hover:border-2 hover:border-blue-400' src={getAlbumImage(singleTrack.albumId)} />
                            <p class="m-0 text-sm text-gray-500">{singleTrack.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TopSongs