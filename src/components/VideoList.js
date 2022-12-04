import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Video from './Video';
import { fetchVideo } from "./store/slice";

function VideoList() {
    const videos = useSelector((state) => state.videoData.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    const videoFragment = videos.map((videoCard) => 
            <Video key={videoCard.id} preview={videoCard.preview} header={videoCard.header} date={videoCard.date} author={videoCard.author} />
    
    );

    return (
        <div className="container mx-auto flex flex-wrap gap-2">
            {videoFragment}   
        </div>
    )
}

export default VideoList;