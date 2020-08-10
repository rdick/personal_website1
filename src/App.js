import React, { useState } from 'react';
import './App.css';
import { Parallax } from "react-parallax";
import useWindowDimensions from './hooks/window'

function App() {
  const { height, width } = useWindowDimensions();
  const [about, setAbout] = useState(false)
  const [projects, setProjects] = useState(false)
  const [contact, setContact] = useState(false)
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
    <div>
      <section className="page1">
        <Parallax
          // bgStyle={{ backgroundColor: 'black' }}
          bgImage={'https://www.blackdiamondequipment.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwaa32a4c9/images/stories/S20_WeAreListening_HP-Content.jpg'}
          bgImageAlt="the cat"
          strength={400}
          renderLayer={percentage => (
            <>
              {/* Top Right */}
              <div style={{
                position: 'absolute',
                right: `0%`,
                top: '0%',
                width: 0,
                height: 0,
                borderTop: `${2000 / (percentage * 80)}vh solid #7A431D`,
                borderLeft: `${2000 / (percentage * 80)}vw solid transparent`,
              }} />
              <img src="/HelloMyNameIs.png" alt="" style={{
                position: 'absolute',
                right: `40%`,
                top: '27%',
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
                top: '32.5%',
                width: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                height: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,
                background: "#7A431D",


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
                borderRadius: "100%"
              }} >Web Devel<span style={{
                background: `rgb${`${percentage < 0.7
                  ? "(0,0,0)"
                  : percentage < 0.705
                    ? "(2,2,2)"
                    : percentage < 0.710
                      ? "(4,4,4)"
                      : percentage < 0.715
                        ? "(6,6,6)"
                        : percentage < 0.720
                          ? "(8,8,8)"
                          : percentage < 0.725
                            ? "(10,10,10)"
                            : percentage < 0.730
                              ? "(12,12,12)"
                              : percentage < 0.735
                                ? "(14,14,14)"
                                : percentage < 0.740
                                  ? "(16,16,16)"
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
              {console.log(percentage)}
            </>
          )}
        >
          <div style={{ height: '210vh' }} />

        </Parallax>


        <div style={{ width: '100%', background: '#121212' }} >

          <div className='about-section' style={{ background: '#121212', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingRight: '1em', paddingLeft: '1em' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '40%' }}>
              <div className="title-headers">
                About
              </div>
              <p classname='about-info' style={{ color: 'gray', fontSize: '2em', lineHeight: '1.4em', letterSpacing: '0.05em' }}>While studying Civil Engineering, I was introduced to programming and found it fascinating. Today,
              As a junior developer web developer I can use my prior experience, managing multi-million dollar projects, to make your project come to life!</p>
            </div>
            <div classname='experiment' style={{ display: 'flex', alignItems: 'flex-end', background: 'radial-gradient(closest-corner, #353535 , #121212 60%)' }}>
              <img src={"/ryan-removebg.png"} style={{ height: '60vh', filter: 'grayscale(100%) brightness(80%)' }}></img>
            </div>
          </div>

          <div className='about-section' style={{ background: '#121212', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingRight: '1em', paddingLeft: '1em', paddingTop: '10em' }}>
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
            style={{ color: 'white' }}
          >
            {/* <label>Name:</label> */}
            <input className='input-general input-small' type="name" name="name" placeholder="what's your name?" />

            {/* <label>Email:</label> */}
            <input className='input-general input-small' type="email" name="email" placeholder="what's your email?" />

            {/* <label>Message:</label> */}
            <textarea rows={10} cols={20}
              className='input-general input-large' type="text" name="message" placeholder="My favorite type of pizza is Hawaiian. What's yours?" />

            {status === "SUCCESS" ? <p>Thanks!</p> : <button className='input-submit'>
              Submit
                </button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
        <div className='footer' style={{ background: '#121212', textAlign: 'center', padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey' }}>
          © 2012 - {currentyear} Ryan Dick. All rights reserved.
        </div>

        {/* <div style={{ height: '100vh', background: '#ff2928', border: 'green solid 100px', margin: '5%' }}>
          <div style={{ padding: '5%' }}>
            <h1 className='about-title'>About</h1>
            <p style={{ fontSize: 20 }}>While going to school for Civil Engineering, I was introduced to programming and found it fascinating.
            I saw programming as an art, each line of code was a brush stroke on a masterpiece. Today,
            As a junior developer I hope to use my previous experience, managing multi-million dollar projects, with my craft,
            web development, to make your project come to life!
                  </p>
          </div>
        </div>
      </section>

      <h1 className="about-title" style={{ fontFamily: 'Birds of Paradise' }}>Projects</h1>



      <section className="project-section"  >

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture" src="/01_Projects//01_LocalFp/1_R.png" alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Local Footprint</h2>
            <p>•	Monitor employees with real-time location tracking <br />
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

        <br /><br /><br /><br />

        <div className="project-container" >
          <div className="picture-container">
            <img className="project-picture pic2" src={`/ 01_Projects/ 02_ShopRN /${width < 1250 ? "01_main.png" : "02_3screens.png"}`} alt="Local Footprint" />
          </div>
          <div className="details-container">
            <h2 className="project-title">Shoppy</h2>
            <p>A mobile shopping app where you can upload your products and sell them on the application</p>
            <span className="project-tools">React-Native | Firebase | Redux | </span>
            <div className="button-container">
              <a href="https://www.google.com/"><div className="button github">GitHub</div></a>
              <a href="https://www.facebook.com/"><div className="button github">Live</div></a>
            </div>
          </div>
        </div> */}
      </section>
    </div >
  );
}

export default App;



{/* <Parallax
          bgStyle={{ background: 'black' }}
          bgImage={'https://www.blackdiamondequipment.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwaa32a4c9/images/stories/S20_WeAreListening_HP-Content.jpg'}
          bgImageAlt="the cat"
          strength={400}
          renderLayer={percentage => (
            <>
              {console.log(percentage)}
              <div className="title-headers" style={{
                opacity: `${(percentage - 0.05) * 15}`
              }} > About </div>

              <div className="title-headers" style={{
                top: '30%',
                opacity: `${(percentage - 0.2) * 15}`
              }} > Projects </div>

              <CSSTransition in={about} timeout={200} classNames="my-node">
              <div className="title-headers"
                style={{
                  top: '60%',
                  opacity: `${(percentage - 0.34) * 15}`
                }}
                onClick={() => setAbout(true)}
              > Contact<button onClick={() => setAbout(!about)}>hello</button></div>

              </CSSTransition>
              {console.log(about)}

            </>
          )}
        >
          <div style={{ height: '85vh' }} />
        </Parallax> */}