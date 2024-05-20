import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/billtrim.png";
import projImg2 from "../assets/img/fakestore.png";
import projImg3 from "../assets/img/weatherApp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Billtrim",
      description: "Fintech Startup - Design & Development",
      imgUrl: projImg1,
      url: "https://www.billtrim.com/"
    },
    {
      title: "Fake E-commerce Store",
      description: "E-commerce Platform - Design & Development",
      imgUrl: projImg2,
      url: "https://moyzone.github.io/fakestorecreation/"  
    },
    {
      title: "Weather App",
      description: "Real-time Weather Updates - API Integration",
      imgUrl: projImg3,
      url: "https://moyzone.github.io/weatherApp/" 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>I've had the opportunity to work on some exciting projects that showcase my skills and versatility as a developer. Notably, I contributed to building a web fintech startup called Billtrim, where I helped create a platform for managing and reducing household bills. Additionally, I developed a fake e-commerce store to demonstrate a full-fledged shopping experience from product listings to checkout. I've also built a simple weather app, providing real-time weather updates using API integration.</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
