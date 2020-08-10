import React, { useState } from 'react';
import './App.css';
import { Parallax } from "react-parallax";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import useWindowDimensions from './hooks/window'

function App() {
  const { width } = useWindowDimensions();
  const [status, setStatus] = useState("")

  let currentyear = new Date().getFullYear()


  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  return (
    <>
      <Parallax
        // bgStyle={{ backgroundColor: 'black' }}
        bgImage={'https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-076-premium-dark.png'}
        bgImageAlt="the cat"
        renderLayer={percentage => (
          <>
            {/* Top Right */}
            {/* <div style={{
                position: 'absolute',
                right: `0%`,
                top: '0%',
                width: 0,
                height: 0,
                borderTop: `${2000 / (percentage * 80)}vh solid #c9050a`,
                borderLeft: `${2000 / (percentage * 80)}vw solid transparent`,
              }}> */}
            {/* <div className='nav' style={{ right: '3em' }}>Contact</div>

              <div className='nav' style={{ right: '8em' }}>Projects</div>

              <div className='nav' style={{ right: '13em' }}>About</div> */}

            <img src="/HelloMyNameIs.png" alt="" style={{
              position: 'absolute',
              right: `35%`,
              top: '15%',
              width: `${50 + (percentage - 0.49) * 1000}vw`,
              transform: `translate(0,${(percentage) * 10000})px`,
              opacity: `
                ${percentage < 0.5
                  ? 1
                  : percentage < 0.505
                    ? 0.9
                    : percentage < 0.51
                      ? 0.8
                      : percentage < 0.515
                        ? 0.7
                        : percentage < 0.52
                          ? 0.6
                          : percentage < 0.525
                            ? 0.5
                            : percentage < 0.53
                              ? 0.4
                              : percentage < 0.535
                                ? 0.3
                                : percentage < 0.54
                                  ? 0.2
                                  : percentage < 0.545
                                    ? 0.1
                                    : percentage < 0.55
                                      ? 0.05
                                      : 0}`
            }} />
            {/* Circle */}
            <div style={{
              position: 'absolute',
              right: `17%`,
              top: '20.5%',
              width: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
              height: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
              transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,
              background: "#c9050a",


              // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,




              borderRadius: "100%"
            }} ><img src="/RyanName.png" alt="" style={{
              marginTop: "20%",
              transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 9000)}px)`,
              opacity: `${percentage < 0.6
                ? 0.9
                : percentage < 0.603
                  ? 0.8
                  : percentage < 0.605
                    ? 0.7
                    : percentage < 0.607
                      ? 0.6
                      : percentage < 0.609
                        ? 0.5
                        : percentage < 0.611
                          ? 0.4
                          : percentage < 0.613
                            ? 0.4
                            : percentage < 0.615
                              ? 0.3
                              : percentage < 0.617
                                ? 0.2
                                : percentage < 0.619
                                  ? 0.1
                                  : percentage < 0.621
                                    ? 0.05
                                    : 0}`
            }} /></div>

            <div style={{
              position: 'absolute',
              whiteSpace: 'nowrap',
              right: `39%`,
              top: '50%',
              transform:
                `translateY(${percentage < 0.54 ? "0" : percentage < 0.71 ? "78" : ((percentage - 0.54) * 300)}px) 
                translateX(${percentage < 0.7 ? percentage : percentage < 0.85 ? ((percentage - 0.7) * 79000) : 11850}px)
                `,
              fontSize: `${width < 431 ? 40 :
                percentage < 0.7 ? 50 : percentage < 0.85 ? 56.5 + (percentage - 0.70) * 40000 : 6056}px`,
              // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,
              borderRadius: "100%",
              color: '#232323'
            }} >Web Devel<span style={{
              background: `rgb${`${percentage < 0.740
                ? "(20,20,20)"
                : percentage < 0.750
                  ? "(18,18,18)"
                  : percentage < 0.760
                    ? "(18,18,18)"
                    : "(18,18,18)"}`}`


              ,
              borderRadius: '100%', height: '0.6em', width: '0.6em', display: 'inline-block',
              fontSize: `${width < 431 ? 40 : percentage < 0.7 ? 50 : percentage < 0.85 ? 56.5 + (percentage - 0.70) * 60000 : 9056}px`,
            }}></span>per
              </div>
          </>
        )}
      >
        <div style={{ height: '210vh' }} />

      </Parallax>


      <div style={{ width: '100%', background: '#121212' }} >

        <div className='about-section'>
          <div className="title-headers">
            About
          </div>
          <div className='about-container'>
            <p className='about-info'>
              While studying Civil Engineering, I was introduced to programming and found it fascinating. Today,
              As a junior developer web developer I can use my prior experience, managing multi-million dollar projects, to make your project come to life!
              </p>
            <div style={{
              display: `flex`, alignItems: `flex-end`, background: `radial-gradient(closest-corner, #353535 , #121212 60%)`
            }} >
              <img src={"/ryan-removebg.png"} style={{ filter: 'grayscale(100%) brightness(80%)' }} className='about-pic'></img>
            </div>

          </div>

        </div>

        <div className='about-section'>
          <div className="title-headers">
            Projects
            </div>
        </div>

        <div className="project-container" style={{ paddingTop: 0 }} >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/Picture1.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Local Footprint</h2>
            <p className='project-info'>•	Monitor employees with real-time location tracking <br />
            •	See past location data of all employees<br />
            •	Workers can send reports from their phone to their manager<br />
            </p>
            <span className="project-tools">React | React-Native | Firebase | MapBox |  Deck.gl</span>
            <div className="button-container">
              <a href="https://www.google.com/"><div className="button github">GitHub</div></a>
              <a href="https://www.facebook.com/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/Picture1.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Local Footprint</h2>
            <p className='project-info'>•	Monitor employees with real-time location tracking <br />
            •	See past location data of all employees<br />
            •	Workers can send reports from their phone to their manager<br />
            </p>
            <span className="project-tools">React | React-Native | Firebase | MapBox |  Deck.gl</span>
            <div className="button-container">
              <a href="https://www.google.com/"><div className="button github">GitHub</div></a>
              <a href="https://www.facebook.com/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/Picture1.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Local Footprint</h2>
            <p className='project-info'>•	Monitor employees with real-time location tracking <br />
            •	See past location data of all employees<br />
            •	Workers can send reports from their phone to their manager<br />
            </p>
            <span className="project-tools">React | React-Native | Firebase | MapBox |  Deck.gl</span>
            <div className="button-container">
              <a href="https://www.google.com/"><div className="button github">GitHub</div></a>
              <a href="https://www.facebook.com/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className='about-section' style={{ background: '#121212', textAlign: 'center', paddingTop: '10em' }}>
          <div className="title-headers">
            Contact
            </div>
        </div>

        <form
          onSubmit={submitForm}
          action="https://formspree.io/mqkyjakv"
          method="POST"
          className='contact-form'
        >
          {/* <label>Name:</label> */}
          <input className='input-general input-small' type="name" name="name" placeholder="what's your name?"
            style={{ color: 'white', paddingTop: 0 }} />

          {/* <label>Email:</label> */}
          <input className='input-general input-small' type="email" name="email" placeholder="what's your email?" />

          {/* <label>Message:</label> */}
          <textarea rows={10} cols={20}
            className='input-general input-large' type="text" name="message" placeholder="questions?" />

          {status === "SUCCESS" ? <p>Thanks!</p> : <button className='input-submit'>
            Submit
                </button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>

      <div className='footer'>
        <div className='footer-container'>
          <a href="https://github.com/rdick" className='footer-icon-container' >
            <AiFillGithub className='footer-icon' size='1.1em' />
            <div className='footer-icon-name'>
              Github
              </div>
          </a>
          <a href="https://www.linkedin.com/in/ryan-dick-5a421068/" className='footer-icon-container' >
            <AiFillLinkedin className='footer-icon' size='1.1em' />
            <div className='footer-icon-name'>
              LinkedIn
              </div>
          </a>
          <a href="mailto:ryanwbdick@gmail.com" className='footer-icon-container' >
            <MdEmail className='footer-icon' size='1.1em' />
            <div className='footer-icon-name'>
              Email
              </div>
          </a>
        </div>

        <div>
          © 2012 - {currentyear}
            &nbsp; Ryan Dick. All rights reserved.
          </div>




      </div>
    </>
  );
}

export default App;
