import './App.css';
import AboutMe from './pages/aboutme';
import Projects from './pages/projects';
import Submit from './pages/submitPage';
import { useState } from 'react';
import Link from 'react-router-dom'

/*
function renderPage(currentPage) {
  if (currentPage === 'AboutMe') {

    return <AboutMe />
  }
  if (currentPage === 'Projects') {

    return <Projects />
  }
  if (currentPage === 'Submit') {

    return <Submit />
  }
}


function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  return (
    <div>
      <nav>
        <h1 className='name'>Nathan Hawk</h1>
        <Link to='#' onClick={() => setCurrentPage('AboutMe')} className='about-me nav-btn hvr-fade'>About Me</a>
        <a href='#' onClick={() => setCurrentPage('Projects')} className='projects nav-btn hvr-fade'>My Projects</a>
      </nav>
      {renderPage(currentPage)}
      <div style={{ flex: 1 }}>
        <a href='#' onClick={() => setCurrentPage('Submit')} style={{ borderWidth: 1, position: 'absolute', bottom: 0, alignSelf: 'flex-end' }} className='submit hvr-fade'>+ </a>
      </div>
    </div>
  );
}

export default App;
*/