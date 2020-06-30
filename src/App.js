import React from 'react';
import './App.css';
import Colors from './constants/colors'
import { Parallax, Background } from "react-parallax";
import useWindowDimensions from './hooks/window'

function App() {
  const { height, width } = useWindowDimensions();
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
                top: '55%',
                transform:
                  `translateY(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px) 
                translateX(${percentage < 0.6 ? (percentage) : ((percentage - 0.6) * 23500)}px)
                `,
                fontSize: `${width < 431 ? 40 :
                  percentage < 0.6 ? 50 : 56.5 + (percentage - 0.6) * 11000}px`,
                // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,
                borderRadius: "100%"
              }} >Web Devel<span style={{ background: "white", borderRadius: '100%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>per
              </div>
              {console.log(percentage)}
              <div style={{
                position: 'absolute',
                left: `50%`,
                top: '56.3%',
                width: `${percentage < 0.6 ? "30" : ((percentage - 0.6) * 1000) + 30}px`,
                height: `${percentage < 0.6 ? "30" : ((percentage - 0.6) * 1000) + 30}px`,
                background: "white",
                transform: `translateY(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,


                // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,




                borderRadius: "100%"
              }} />

              {/* <div style={{
                position: 'absolute',
                whiteSpace: 'nowrap',
                left: `65.5%`,
                top: '55%',
                transform: `translateY(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,
                fontSize: `${width < 431 ? 40 :
                  percentage < 0.601 ? 40 + (percentage - 0.49) * 150 : 56.65 + (percentage - 0.601) * 6000}px`,
                // background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,
                borderRadius: "100%"
              }} >per
              </div> */}
            </>
          )}
        >
          <div style={{ height: '140vh' }} />

        </Parallax>
        <div style={{ height: '100vh', background: '#ff2928', border: 'black solid 1px', margin: '5%' }}>
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
            <img className="project-picture pic2" src={`/01_Projects/02_ShopRN/${width < 1250 ? "01_main.png" : "02_3screens.png"}`} alt="Local Footprint" />
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
        </div>

      </section>

    </div >
  );
}

export default App;



