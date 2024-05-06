import React, { useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Blog() {
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        const url = `https://dummyjson.com/posts`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data.posts);
            });
    }, []);
  return (
    <div>
          <>
              {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  {post.title}<br></br>
                </Link>
              ))}
          </>
    </div>
  )
}
