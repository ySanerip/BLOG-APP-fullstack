import React from 'react'
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import moment from 'moment';



const Write = () => {

  const navigate = useNavigate();

  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.desc || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('http://localhost:8800/api/upload', formData)
      return res.data;
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        }, { withCredentials: true })
        : await axios.post(`http://localhost:8800/api/posts/`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        }, { withCredentials: true });
        navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className='editor'
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Status: </b> Rascunho
          </span>
          <span>
            <b>Visibilidade: </b> Público
          </span>
          <input
            style={{ display: 'none' }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Imagem
          </label>
          <div className="buttons">
            <button>Salvar como Rascunho</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="science">Ciência</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="technology">Tecnologia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "economy"}
              name="cat"
              value="economy"
              onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="economy">Economia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "study"}
              name="cat"
              value="study"
              onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="study">Estudos</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write 