import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "../style/Project.css"; 
import { ExternalLink } from 'lucide-react';
import projImg1 from "../assets/img/tryon.webp";
import projImg2 from "../assets/img/chat.webp";
import projImg3 from "../assets/img/quantum.webp";
import projImg4 from "../assets/img/deepfakes.webp";
import projImg5 from "../assets/img/site.webp";
import projImg6 from "../assets/img/heart.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import htmlImg from "../assets/img/html.webp";
import cssImg from "../assets/img/css.webp";
import jsImg from "../assets/img/js.webp";
import reactImg from "../assets/img/react.webp";
import pythonImg from "../assets/img/python.webp";
import opencvImg from "../assets/img/opencv.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Virtual Tryon",
    
      imgUrl: projImg1,
      link: "https://github.com/codeskavy/Virtual_Tryon"
    },
    {
      title: "Chatting Website",
    
      imgUrl: projImg2,
      link: "https://github.com/codeskavy/Pingme"
    },
    {
      title: "Quantum Crypt Analysis",
      imgUrl: projImg3,
      link: "https://github.com/codeskavy/Quantum-Crpyt-Analysis"
    },
    {
      title: "Deepfake Detection",
      imgUrl: projImg4,
      link: "https://deefakeai.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      imgUrl: projImg5,
      link: "https://github.com/codeskavy/TrendSphere"
    },
    {
      title: "Heart Disease Prediction",
      imgUrl: projImg6,
      link: "https://github.com/codeskavy/Heart-Disease-Prediction"
    }
  ];

  const techStack = [
    { name: "HTML", imgUrl: htmlImg },
    { name: "CSS", imgUrl: cssImg },
    { name: "JavaScript", imgUrl: jsImg },
    { name: "React", imgUrl: reactImg },
    { name: "Python", imgUrl: pythonImg },
    { name: "OpenCv", imgUrl: opencvImg }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <Col key={index} sm={6} md={4} className="mb-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image-link">
                              <ProjectCard {...project} />
                            </a>
                          </Col>
                        ))}
                      </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="tech-stack-container">
                          {techStack.map((tech, index) => (
                            <img key={index} src={tech.imgUrl} alt={tech.name} className="floating-tech" />
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for updates...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
      <style jsx>{`
        .tech-stack-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .floating-tech {
          width: 60px;
          height: 60px;
          animation: float 3s infinite ease-in-out;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};
