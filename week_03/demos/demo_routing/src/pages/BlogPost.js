import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function BlogPost() {
    const { postId } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = `https://dummyjson.com/posts/${postId}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPost(data);
            });
    }, []);

    
    return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
);
}
