import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Avatar } from "flowbite-react";
import { fetchProfile } from "./store/userSlice";


function AvatarField() {

    const img = useSelector((state) => state.storageData.users.img);
    const dispatch = useDispatch();

  

    useEffect(() => {
        dispatch(fetchProfile());
        }, [dispatch]);

    return (<div className="flex flex-wrap gap-2">
        <Link to="/profile">
        <Avatar
            img={img}
            rounded={true}
        />
        </Link>
    </div>)
}

export default AvatarField;