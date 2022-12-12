import { Link } from 'react-router-dom';
import LikesCount from "./LikesCount";

function VideoInfo(props) {
    const linkToVideo = "/video/" + props.info.id;

    return (
        <div className='px-5'>
            <LikesCount count={props.info.likes} id={props.info.id} />
            <Link to={linkToVideo} >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.info.header}
                </h5>
                <Link to={`/user/${props.info.author}`}>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {props.info.author}
                    </p>
                </Link>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.info.date}
                </p>
            </Link>
        </div >
    );
}

export default VideoInfo;