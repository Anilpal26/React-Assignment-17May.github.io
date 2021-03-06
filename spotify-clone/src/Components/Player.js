import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { napster } from '../util';

const Player = () => {
    const [isPlaying , setIsPlaying] = useState(false);
    const [currentTime , setCurrentTIme] = useState(0);
    const audioPlayer = useRef();
    const [tracksong , setTracksong] = useState({});

    
    const trackId = useSelector(state => state.playingTrack);
    const response = {"meta":{"totalCount":null,"returnedCount":1},"tracks":[{"type":"track","id":"tra.5156528","index":7,"disc":1,"href":"https://api.napster.com/v2.2/tracks/tra.5156528","playbackSeconds":258,"isExplicit":false,"isStreamable":false,"isAvailableInHiRes":false,"name":"Say It Ain't So","isrc":"USIR10400084","shortcut":"weezer/weezer-blue-album-deluxe-edition/say-it-aint-so","amg":"6907998","blurbs":[],"artistId":"art.954","artistName":"Weezer","albumName":"Weezer (Blue Album) (Deluxe Edition)","formats":[{"type":"format","bitrate":320,"name":"AAC","sampleBits":16,"sampleRate":44100},{"type":"format","bitrate":192,"name":"AAC","sampleBits":16,"sampleRate":44100},{"type":"format","bitrate":128,"name":"MP3","sampleBits":16,"sampleRate":44100},{"type":"format","bitrate":64,"name":"AAC PLUS","sampleBits":16,"sampleRate":44100}],"losslessFormats":[{"type":"format","bitrate":44100,"name":"FLAC","sampleBits":16,"sampleRate":44100}],"albumId":"alb.5153820","isAvailableInAtmos":false,"contributors":{"primaryArtist":"art.954"},"links":{"artists":{"ids":["art.954"],"href":"https://api.napster.com/v2.2/artists/art.954"},"albums":{"ids":["alb.5153820"],"href":"https://api.napster.com/v2.2/albums/alb.5153820"},"genres":{"ids":["g.1053","g.1050","g.5"],"href":"https://api.napster.com/v2.2/genres/g.1053,g.1050,g.5"},"tags":{"ids":["tag.152196498"],"href":"https://api.napster.com/v2.2/tags/tag.152196498"}},"previewURL":"https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"}]}
    const track = response.tracks[0];


    useEffect(() => {
        (async _ => {
            const responce = await napster.get(`/tracks/${trackId}`);
            setTracksong(responce.data?.track[0]);
            audioPlayer.current.src = responce.data?.track[0].previewURL;
        })([trackId]);
    });

    const togglePlayPause = () => {
        setIsPlaying(e => !e);
    }

    useEffect(() => {
        if(isPlaying){
            audioPlayer.current.play();
        }else{
            audioPlayer.current.pause();
        }
    },[isPlaying]);

    const playerCurrentTimeUpdate = e => {
        const currentTime = e.target.currentTime;
        setCurrentTIme(currentTime);
    }

    const changeCurrentTime = e => {
        const currentTime = e.target.value;
        setCurrentTIme(currentTime);
        audioPlayer.current.currentTime = currentTime;
    }

    return (
        <>
            <footer className='fixed bottom-0 w-full'>
                <audio controls ref={audioPlayer} onTimeUpdate={playerCurrentTimeUpdate}>
                    {/* <source src={track?.previewURL} type="audio/mp3" /> */}
                </audio>
                <input type="range" className='w-full -mb-4' value={currentTime*1000000} max={30000000} />
                <div className="bg-gray-800 " >
                    <div className="max-w-7xl ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center ">
                                <img className='h-full p-2' src='https://api.napster.com/imageserver/v2/artists/Art.44069/images/230x153.jpg' />
                                <h3 className='text-white'>Name</h3>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <button className='text-white' onClick={togglePlayPause}>
                                    {isPlaying ? "Pause" : "Play"}
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Player