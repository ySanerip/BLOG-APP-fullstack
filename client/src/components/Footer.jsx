import React from 'react'
import Git from '../img/github.png';
import Lkd from '../img/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="text">
        <h3>Sobre mim:</h3>
        <p>
          Sou um desenvolvedor e estudante de matemática,<br />
          atualmente vivendo na ensolarada Ribeirão Preto.<br />
          <br />
          Estou procurando oportunidades para ajudá-los a desenvolver<br />
          os projetos que desejam, tendo assim a oportunidade de<br />
          implementar conceitos, aumentar meus conhecimentos enquanto<br />
          estudo metodologias, conceitos e linguagens de forma prática.
        </p>
      </div>
      <div className="icons">
        <img src={Git} alt="" />
        <img src={Lkd} alt="" />
      </div>
      <span>
        🚀 Made with React! 🚀
      </span>
    </footer>
  )
}

export default Footer