import React from 'react';
import './App.css';
import Colors from './constants/colors'
import { Parallax, Background } from "react-parallax";

function App() {
  const windowSize = window.innerWidth
  console.log(windowSize, typeof windowSize)
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
                borderTop: `${2000 / (percentage * 80)}vh solid red`,
                borderLeft: `${2000 / (percentage * 80)}vw solid transparent`,
              }} />
              <img src="/HelloMyNameIs.png" alt="" style={{
                position: 'absolute',
                right: `25%`,
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
                right: `10%`,
                top: '18.5%',
                width: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                height: `${percentage < 0.53 ? "250" : ((percentage - 0.53) * 10000) + 250}px`,
                transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 2000)}px)`,



                background: `rgb(255,${((percentage - 0.49) * 700)},${((percentage - 0.49) * 1200)})`,




                borderRadius: "100%"
              }} ><img src="/RyanName.png" alt="" style={{
                marginTop: "20%",
                transform: `translateX(${percentage < 0.54 ? "0" : ((percentage - 0.54) * 9000)}px)`,
                opacity: `${windowSize > 431 ? "1" : percentage < 0.601
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

              {/* About Me - Square */}
              <div
                style={{
                  position: 'absolute',
                  // background: `rgba(255, 125, 0, ${(percentage - 0.57) * 10})`,
                  left: `${windowSize > 1150 ? "25%" : "10%"}`,
                  top: '35%',
                  margin: "0 auto",
                  width: `${windowSize > 1150 ? "55%" : "80%"}`,
                  height: percentage * 500,
                  color: `black`, fontFamily: "Optima",
                  lineHeight: "1.5em"
                }}
              >
                {((percentage - 0.49) * 700)}
                <p></p>
                {((percentage - 0.49) * 1200)}
                <h1>About Me</h1>
                <p style={{ fontSize: 20 }}>While going to school for Civil Engineering, I was introduced to programming and found it fascinating.
                I saw programming as an art, each line of code was a brush stroke on a masterpiece. Today,
                As a junior developer I hope to use my previous experience, managing multi-million dollar projects, with my craft,
                web development, to make your project come to life!
                  </p>
                <br />
                <div style={{ borderBottom: "solid black 2px" }} />
                <br />
                <br />
                <h1>Education</h1>
                <div style={{ fontSize: 20 }}>
                  <p><strong>University of Alberta - Civil Engineering</strong> - Started two non-profits <br /></p>
                  <p><strong>Code Core College - Web Dev Bootcamp</strong>- Built data visualization tools<br /></p>
                </div>
                <br />
                <div style={{ borderBottom: "solid black 2px" }} />
                <br />
                <br />
                <h1>Work Experience</h1>
                <div style={{ fontSize: 20 }}>
                  <p><strong>Summary</strong><br /></p>
                  <p>Managed the construction of Oilers Hockey Arena ($630 million), Oil and Gas Plants in Fort McMurray,
                  and Water Treatment Plants Across Alberta. Worked in construction projectmanagment for 4 years.
                     <br />
                    <br />
                     Skills gained include contract managment, scheduling multiple subcontractors,
                     quality control, cost control and forecasting.
                  </p>
                </div>
                <br />
                <div style={{ borderBottom: "solid black 2px" }} />
                <br />
                <br />
                <h1>Hobbies</h1>
                <div style={{ fontSize: 20 }}>
                  <p><strong>Volleyball</strong> - especially beach volleyball<br /></p>
                  <p><strong>Travelling</strong> - recently to Amsterdam and Morocco <br /></p>
                </div>
                {windowSize < 431
                  ?
                  ""
                  :
                  <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{
                      width: `100%`,
                      opacity: `${percentage < 0.73
                        ? 0.0
                        : percentage < 0.735
                          ? 0.1
                          : percentage < 0.74
                            ? 0.2
                            : percentage < 0.745
                              ? 0.3
                              : percentage < 0.75
                                ? 0.4
                                : percentage < 0.752
                                  ? 0.5
                                  : percentage < 0.754
                                    ? 0.6
                                    : percentage < 0.756
                                      ? 0.7
                                      : percentage < 0.759
                                        ? 0.8
                                        : percentage < 0.76
                                          ? 0.9
                                          : 1
                        }`
                    }}>
                      <img src='/ryan.png' style={{ borderRadius: "10%", width: `90%` }} />
                    </div>
                    {((percentage - 0.49) * 700)}
                    <p></p>
                    {((percentage - 0.49) * 1200)}
                  </>
                }

                <br />
              </div>
            </>
          )}
        >
          <div style={{ height: '300vh' }} />

        </Parallax>
      </section>

      <h1>Projects</h1>



      <section className="about-section"  >
        <h2 className="project-title">Local Footprint</h2>
        <div className="about" >
          <div className="picture-container">
            <img className="picture" src="/01_Projects//01_LocalFp/1_R.png" alt="Local Footprint" />
          </div>
          <div className="about-container">
            <p>details of projects daljdsf kja;dflkja; ldjf;la kjdfkj;l skdfjakjdf lkjad;fj;jfakj ;kljasdkfa;klf</p>
            <span className="project-tools">JavaScript | React | Firebase | HTML | CSS</span>
            <div>
              <button>GitHub</button>
              <button>GitHub</button>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}

export default App;

