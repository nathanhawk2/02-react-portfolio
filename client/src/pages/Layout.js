import '../App.css';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  return (
    <>
      <div>
        <nav>
          <h1 className='name'>Nathan Hawk</h1>
          <Link to='/' className='about-me nav-btn hvr-fade'>About Me</Link>
          <Link to='/projects' className='projects nav-btn hvr-fade'>My Projects</Link>
        </nav>
        <div style={{ flex: 1 }}>
          <Link to='/submit' style={{ borderWidth: 1, position: 'absolute', bottom: 0, alignSelf: 'flex-end' }} className='submit hvr-fade'>+</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
