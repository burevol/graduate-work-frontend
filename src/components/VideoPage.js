import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import Comment from './Comment';
import { fetchComments } from "./store/commentSlice";
import { fetchVideoFile } from './store/videoFileSlice';

function VideoPage(props) {

    const params = useParams();
    const comments = useSelector((state) => state.storageData.comments.comments);
    const link = useSelector((state) => state.storageData.videoFile.link);
    const loaded = useSelector((state) => state.storageData.videoFile.loaded);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchVideoFile(params.id))
        dispatch(fetchComments(params.id));
    }, [dispatch]);

    const commentsFragment = comments.map((comment) =>
        <Comment key={comment.id} author={comment.author} body={comment.body} />
    );

    return (
        <div className="container mx-auto">
            {
                loaded
                    ?
                    <div>
                        <video autoPlay controls>
                            <source src={link} type="video/mp4" />
                        </video>
                        <div className="container mx-auto">
                            {commentsFragment}
                        </div>
                    </div>
                    :
                    <Spinner
                        color="info"
                        aria-label="Info spinner example"
                    />
            }
        </div>
    )

}

export default VideoPage;