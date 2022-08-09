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
      {width > 540 ?
        <Parallax
          bgImage={'/background.png'}
          bgImageAlt="the cat"
          renderLayer={percentage => (
            <>
              {/* `Hello my name is` image */}
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
              {/* Expanding Circle */}
              <div style={{
                position: 'absolute',
                right: `17%`,
                top: '20.5%',
                width: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                height: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,
                background: "#c9050a",
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

              {/* Expanding Web Developer Word */}
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
                borderRadius: "100%",
                color: '#232323'
              }} >Full Stack Devel

              {/* Expanding 'O' in Developer */}
                <span style={{
                  background: `rgb${`${percentage < 0.700
                    ? "(35,35,35)"
                    : percentage < 0.710
                      ? "(33,33,33)"
                      : percentage < 0.720
                        ? "(28,28,28)"
                        : percentage < 0.730
                          ? "(25,25,25)"
                          : percentage < 0.74
                            ? "(23,23,23)"
                            : percentage < 0.750
                              ? "(21,21,21)"
                              : percentage < 0.76
                                ? "(19,19,19)"
                                : "(18,18,18)"}`}`


                  ,
                  borderRadius: '100%', height: '0.6em', width: '0.6em', display: 'inline-block',
                  fontSize: `${width < 431 ? 40 : percentage < 0.7 ? 50 : percentage < 0.85 ? 56.5 + (percentage - 0.70) * 60000 : 9056}px`,
                }}>

                </span>
            per
            </div>
            </>
          )}
        >
          <div style={{ height: '210vh' }} />

        </Parallax>
        : <Parallax
          bgImage={'/background.png'}
          bgImageAlt="the cat"
          renderLayer={percentage => (
            <>
              <h1 style={{
                position: 'absolute',
                color: 'white',
                whiteSpace: 'nowrap',
                lineHeight: '1.5em',
                right: `30%`,
                fontFamily: "'Lemonada', cursive",
                fontSize: '2em',
                top: '45%',
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
              }} >Full Stack Developer<br />Vancouver</h1>

              {/* Expanding Circle */}
              <div style={{
                position: 'absolute',
                right: `20%`,
                top: '10%',
                width: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                height: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                transform: `translateX(${percentage < 0.53 ? "0" : ((percentage - 0.53) * 4500)}px)`,
                background: `rgb${`${percentage < 0.560
                  ? "(201, 5, 10)"
                  : percentage < 0.565
                    ? "(190, 5, 10)"
                    : percentage < 0.570
                      ? "(180, 5, 10)"
                      : percentage < 0.575
                        ? "(170, 5, 10)"
                        : percentage < 0.580
                          ? "(160, 5, 10)"
                          : percentage < 0.585
                            ? "(150, 5, 10)"
                            : percentage < 0.580
                              ? "(140, 5, 10)"
                              : percentage < 0.585
                                ? "(130, 5, 10)"
                                : percentage < 0.590
                                  ? "(120, 5, 10)"
                                  : percentage < 0.595
                                    ? "(110, 5, 10)"
                                    : percentage < 0.6
                                      ? "(100, 5, 10)"
                                      : percentage < 0.605
                                        ? "(90, 5, 10)"
                                        : percentage < 0.61
                                          ? "(80, 5, 10)"
                                          : percentage < 0.615
                                            ? "(70, 5, 10)"
                                            : percentage < 0.62
                                              ? "(60, 10, 10)"
                                              : percentage < 0.625
                                                ? "(50, 15, 15)"
                                                : percentage < 0.63
                                                  ? "(50, 15, 15)"
                                                  : percentage < 0.635
                                                    ? "(40, 18, 18)"
                                                    : percentage < 0.64
                                                      ? "(30, 18, 18)"
                                                      : percentage < 0.645
                                                        ? "(20, 18, 18)"
                                                        : "(18,18,18)"}`}`,
                borderRadius: "100%"
              }} >
                <img src="/RyanName.png" alt="" style={{
                  marginTop: "20%",
                  transform: `translateX(${percentage < 0.53 ? "0" : ((percentage - 0.53) * 6000)}px)`,
                  opacity: `${percentage < 0.6
                    ? 0.9
                    : percentage < 0.610
                      ? 0.8
                      : percentage < 0.612
                        ? 0.7
                        : percentage < 0.614
                          ? 0.6
                          : percentage < 0.616
                            ? 0.5
                            : percentage < 0.618
                              ? 0.4
                              : percentage < 0.620
                                ? 0.4
                                : percentage < 0.622
                                  ? 0.3
                                  : percentage < 0.624
                                    ? 0.2
                                    : percentage < 0.626
                                      ? 0.1
                                      : percentage < 0.628
                                        ? 0.05
                                        : 0}`
                }} />
              </div>
            </>
          )}
        >
          <div style={{ height: '140vh' }} />

        </Parallax>
      }

      <div style={{ width: '100%', background: '#121212' }} >

        <div className='about-section'>
          <div className="title-headers">
            About
          </div>
          <div className='about-container'>
            <p className='about-info'>
            I am a full stack software developer with 3 years of experience using JavaScript, React, React Native, Express, Ruby on Rails, HTML, CSS and SQL Relational Databases. 
              </p>
            <div style={{
              display: `flex`, alignItems: `flex-end`, background: `radial-gradient(closest-corner, #353535 , #121212 60%)`
            }} >
              <img src={"/ryan-removebg.png"} style={{ filter: 'grayscale(100%) brightness(80%)' }} className='about-pic'></img>
            </div>

          </div>

        </div>

        <div className='about-section'>
          <div className="title-headers" style={{ marginBottom: '0.3em' }}>
            Projects
            </div>
        </div>

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/01.localfootprint.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Local Footprint</h2>
            <p className='project-info'>A real-time location tracking application that allows managers
            to see where their employees are situated. Workers can also send reports
            from their phone to their manager. This project has a mobile application and a desktop dashboard.
            </p>
            <span className="project-tools">React | React-Native | Firebase | MapBox |  Deck.gl</span>
            <div className="button-container">
              <a href="https://github.com/akshayn138888/local-footprint"><div className="button github">GitHub</div></a>
              <a href="https://localfootprint.netlify.app"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture x-padding" src="/02.Projects/02.ecom-phone.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Phone Shopping App</h2>
            <p className='project-info'>An ecommerce mobile application that allows users to buy and sell items with other users.
            </p>
            <span className="project-tools">React-Native | Firebase | Redux | Redux Thunk</span>
            <div className="button-container">
              <a href="https://github.com/rdick/Phone---Shoppy"><div className="button github">GitHub</div></a>
              {/* <a href="https://www.facebook.com/"><div className="button github">Live</div></a> */}
            </div>
          </div>
        </div>

        <div className="project-container" style={{ paddingTop: 0 }} >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/05.iambmg.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Artist Portfolio Website</h2>
            <p className='project-info'>An artist portfolio website made for a personal friend of mine
            </p>
            <span className="project-tools">React | Framer Motion | React Hooks</span>
            <div className="button-container">
              <a href="https://github.com/rdick/Bens_Art_Showcase"><div className="button github">GitHub</div></a>
              <a href="https://iambmg.netlify.app/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className="project-container" style={{ paddingTop: 0 }} >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/03.chatapp.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Real-Time Chat App</h2>
            <p className='project-info'>A desktop application that enables real-time chat between multiple devices
            </p>
            <span className="project-tools">React | Express | Socket.io</span>
            <div className="button-container">
              <a href="https://github.com/rdick/React_chat_app"><div className="button github">GitHub</div></a>
              <a href="https://instant-message.netlify.app/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div>

        <div className="project-container" style={{ paddingTop: 0 }} >
          <div className="picture-container">
            <img className="project-picture" src="/02.Projects/04.auctionapp.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Luxor Auctions - Bidding App</h2>
            <p className='project-info'>A desktop application where users can auction off items and can bid on other user’s items
            </p>
            <span className="project-tools">Ruby on Rails | CRUD | REST API | React</span>
            <div className="button-container">
              <a href="https://github.com/rdick/Luxor-Auctions---Bidding-App"><div className="button github">GitHub</div></a>
              <a href="https://auction-react3.herokuapp.com/"><div className="button github">Live</div></a>
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
          <input className='input-general input-small' type="name" name="name" placeholder="name?"
            style={{ color: 'white', paddingTop: 0 }} />

          {/* <label>Email:</label> */}
          <input className='input-general input-small' type="email" name="email" placeholder="email?" />

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
