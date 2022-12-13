import React from "react";
import { Card } from "flowbite-react";
import VideoInfo from "./VideoInfo";
import { Link, useNavigate, useParams } from 'react-router-dom';


function Video(props) {

    const linkToVideo = "/video/" + props.info.id;
    const navigate = useNavigate();

    function goToVideo() {
        navigate({
            pathname: linkToVideo,
        })
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={props.info.preview} alt="" onClick={goToVideo} />
            </a>
            <div className="p-5">
                <VideoInfo info={props.info} />
            </div>
        </div>


    )
}

export default Video;