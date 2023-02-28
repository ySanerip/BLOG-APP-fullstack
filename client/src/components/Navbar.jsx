import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from '../img/logo.png';


const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
      <div className="logo">
          <Link to="/">
            {<img src={Logo} alt="" />}
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=science">
            <h6>CIÊNCIA</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECNOLOGIA</h6>
          </Link>
          <Link className="link" to="/?cat=economy">
            <h6>ECONOMIA</h6>
          </Link>
          <Link className="link" to="/?cat=study">
            <h6>ESTUDOS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Sair</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className='link' to="/write">ESCREVER</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar