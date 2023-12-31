import React, { useState, useEffect } from "react";
import Post from '../Post/Post';
function LocationShow(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/api/locations")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setPostList(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        );
    }, []);

    if (error) {
        return <div>Error!!!</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <Post postList = {postList}></Post>
            </div>
        );
    }
}

export default LocationShow;