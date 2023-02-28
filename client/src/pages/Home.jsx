import React from "react";
import Keep from '../img/keep.png';
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      };
    };
    fetchData();
  }, [cat]);


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      <div className="posts">

        {posts.map((post) => (

          <div className="post" key={post.id}>
            
              <div className="img">
                <img src={`../upload/${post.img}`} alt="" />
              </div>
              
              <div className="content">
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <Link className='link' to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                <span>Continue lendo...</span>
                </Link>
              </div>
              
            
          </div>
        ))}


      </div>
    </div >
  )
}

export default Home