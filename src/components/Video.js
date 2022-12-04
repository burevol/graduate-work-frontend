import React from "react";
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function Video(props) {

    const linkToVideo = "/video/" + props.videoId;
    return (
        <div className="max-w-sm">
            <Link to={linkToVideo} >
            <Card imgSrc={props.preview}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.header}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.author}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.date}
                </p>
            </Card>
            </Link>
        </div>
    )
}

export default Video;