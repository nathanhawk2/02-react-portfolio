import React from 'react';

function AboutMe() {
  return (
    <div className='about aboutTitle'>
      <h1>Hey,&nbsp;I'm Nathan</h1>
      <p className='aboutBio'>
        I grew up and currently live in &nbsp;
        <a className='bioLinks' href='https://en.wikipedia.org/wiki/Charlotte,_North_Carolina'>
          Charlotte, NC
        </a>
        , and I have two wonderful cats. I graduated in May 2020 from &nbsp;
        <a className='bioLinks' href='https://www.providenceday.org/'>
          Providence Day School
        </a>
        , and obtained a certificate from the &nbsp;
        <a className='bioLinks' href='https://www.charlotte.edu/'>
          University of North Carolina at Charlotte
        </a>
        &nbsp; in Full Stack Web Development in November 2022.
        <br></br>
        <br></br>
        I have a passion for constantly learning, and making new ways to simplify assorted tasks. The languages that I am most comfortable with are:
        <br></br>
        <br></br>
      </p>
      <div className="grid-container">
        <div className="grid-cell">HTML</div>
        <div className="grid-cell">CSS</div>
        <div className="grid-cell">JavaScript</div>
        <div className="grid-cell">React</div>
        <div className="grid-cell">MongoDB</div>
        <div className="grid-cell">Express</div>
        <div className="grid-cell">Node</div>
        <div className="grid-cell">NoSQL</div>
        <div className="grid-cell">Git</div>
        <div className="grid-cell">Apollo GraphQL</div>
        <div className="grid-cell">Bootstrap</div>
        <div className="grid-cell">Tailwind</div>
      </div>
      <br></br>
      <br></br>
      <p className='aboutBio'>
        Feel free to reach out to me on &nbsp;
        <a className='bioLinks' href='https://www.linkedin.com/in/nathanhawk620/'>LinkedIn</a>
        , or check out some of my work on &nbsp;
        <a className='bioLinks' href='https://github.com/nathanhawk2'>GitHub</a>
        , as well as my most recently updated &nbsp;
        <a className='bioLinks' href='nothing yet'>resume</a>.
      </p>
    </div>
  )
};

export default AboutMe;