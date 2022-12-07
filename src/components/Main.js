import { useSearchParams } from "react-router-dom";
import Navigation from './Navbar'
import VideoList from './VideoList';

function Main() {
    const [searchParams] = useSearchParams();
    const user = searchParams.get('author');
    return (
        <div>
            <Navigation />
            <VideoList user={user} />
        </div>
    );
}

export default Main;