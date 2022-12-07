import { Card, Button } from "flowbite-react";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './Navbar'

function Profile() {

    function showVideoByUser(user) {
        navigate({
            pathname:'/',
            search: `?author=${user}`})
    }

    const navigate = useNavigate();
    const img = useSelector((state) => state.storageData.users.img)
    const username = useSelector((state) => state.storageData.users.username)
    return (
        <div>
            <Navigation />
            <div className="flex gap-2 p-2">
                <div className="max-w-md">
                    <Card imgSrc={img}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {username}
                        </h5>
                    </Card>
                </div>
                <div>
                    <div className="flex flex-col gap-2 btn-group">
                        <div>
                            <Button className="w-1/4" onClick={() => {showVideoByUser(username)}}>
                                Видео пользователя
                            </Button>
                        </div>
                        <div>
                            <Link to='/profile/upload'>
                                <Button className="w-1/4">
                                    Загрузить видео
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Button className="w-1/4">
                                Чат с пользователем
                            </Button>
                        </div>
                        <div>
                            <Button className="w-1/4">
                                Выход
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;