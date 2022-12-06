import React from "react";
import { Card } from "flowbite-react";
import VideoInfo from "./VideoInfo";


function Video(props) {

    return (
        <div className="max-w-sm">
             
            <Card imgSrc={props.info.preview}>
                <VideoInfo info={props.info}/>   
            </Card>
            
        </div>
    )
}

export default Video;