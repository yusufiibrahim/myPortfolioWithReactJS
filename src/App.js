import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Particle from "react-particles-js";

// components
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Experience from "./pages/experience/experience";
import ProjectTimeline from "./components/projectsTimeline/projectsTimeline";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import { particlesOptions } from "./particlesOptions";

// css
import "./App.css";

// image
import backgroundImg from "./assets/img/parallex/background.webp";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <Particle className="particle particles-box" params={particlesOptions} />

      {/* about me section */}
      <div>
        <Parallax
          blur={{ min: -500, max: 500 }}
          bgImage={backgroundImg}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000} left>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* skills section */}
      <div>
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <Skills />
            </Slide>
          </Container>
        </div>
      </div>

      {/* experience section */}
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade duration={1000}>
              <hr />
              <Experience />
            </Fade>
          </Container>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <ProjectTimeline />
            </Slide>
          </Container>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade duration={1000}>
              <hr />
              <Contact />
            </Fade>
          </Container>
        </div>
      </div>

      {/* FOOTER */}
      <hr />
      <Fade duration={1000}>
        <Footer />
      </Fade>
    </div>
  );
};

export default App;
