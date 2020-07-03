import React, { useState } from 'react';
import './App.css';
import { Parallax } from "react-parallax";
import useWindowDimensions from './hooks/window'
import { CSSTransition } from 'react-transition-group'

function App() {
  const { height, width } = useWindowDimensions();
  const [about, setAbout] = useState(false)
  const [projects, setProjects] = useState(false)
  const [contact, setContact] = useState(false)

  console.log(width)
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
                borderTop: `${2000 / (percentage * 80)}vh solid #ff2928`,
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
                background: "#ff2928",


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
                  `translateY(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px) 
                translateX(${percentage < 0.7 ? (percentage) : ((percentage - 0.7) * 51000)}px)
                `,
                fontSize: `${width < 431 ? 40 :
                  percentage < 0.7 ? 50 : 56.5 + (percentage - 0.7) * 24000}px`,
                // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,
                borderRadius: "100%"
              }} >Web Devel<span style={{ background: "black", borderRadius: '100%', height: '0.6em', width: '0.6em', display: 'inline-block' }}></span>per
              </div>

            </>
          )}
        >
          <div style={{ height: '210vh' }} />

        </Parallax>


        <div style={{ height: '85vh', width: '100%', background: 'black', position: 'absolute' }} >


          <div className="title-headers" onClick={() => setAbout(!about)}> About </div>

          <div className="title-headers" onClick={() => setProjects(!projects)} style={{ top: '30%', }} >
            Projects
          </div>

          <div className="title-headers" onClick={() => setContact(!contact)} style={{ top: '60%' }}>
            Contact
          </div>

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