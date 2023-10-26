import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
        setPosts(res.data); // axios response stored in data prop
    };

    useEffect(()=>{
        fetchPosts();
    }, []);

    console.log(posts);

    return <div></div>
}

export default PostList;