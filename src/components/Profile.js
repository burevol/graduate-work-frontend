import { Card } from "flowbite-react";
import { useSelector } from 'react-redux'

function Profile() {
    const img = useSelector((state) => state.videoData.img)
    const username = useSelector((state) => state.videoData.username)
    return (
        <div className="container mx-auto">
            <Card imgSrc={img}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {username}
                </h5>
            </Card>
        </div>
    );
}

export default Profile;