import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = ({ cat }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      };
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className='link' to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
          <button>Leia mais </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Menu 