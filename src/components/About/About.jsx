import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import photod from '../../assets/photod.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
   <div className="about-title">
    <h1>About me</h1>
    <img src={theme_pattern} alt="" />
   </div>
   <div className="about-sections">
    <div className="about-left">
      <img src={photod} alt="" />
    </div>
    <div className="about-right">
      <div className="about-para">
        <p>I'm a frontend developer skilled in HTML, CSS, JavaScript, and React.js, focused on building responsive and user-friendly web interfaces. I enjoy turning creative ideas into smooth, interactive digital experiences.</p>
        <p>As the Outreach & PR Head of the ELC club at ABESIT, I lead communication and promotional efforts. This role has strengthened my public relations, event management, and teamwork skills.</p>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p><hr style = {{width: "50%"}}/>
        </div>
        <div className="about-skill">
          <p>React JS</p><hr style = {{width: "70%"}}/>
        </div>
        <div className="about-skill">
          <p>Javascript</p><hr style = {{width: "60%"}}/>
        </div>
        <div className="about-skill">
          <p>Python & java</p><hr style = {{width: "50%"}}/>
        </div>
        <div className="about-skill">
          <p>AI & ML</p><hr style = {{width: "50%"}}/>
        </div>
      </div>  
      </div>
      </div>
    <div className="about-achievements">
    <div className="about-achievement">
        <h1>10+</h1>
        <p>CERTIFICATES</p>
      </div><hr />
      <div className="about-achievement">
        <h1>5+</h1>
        <p>PROJECTS COMPLETED</p>
      </div><hr />
      <div className="about-achievement">
        <h1>3+</h1>
        <p>TRAINING COMPLETED</p>
      </div>
    </div>
    </div>
  )
}

export default About