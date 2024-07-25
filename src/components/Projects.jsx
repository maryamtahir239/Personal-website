import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardtwo } from "./ProjectCardtwo";
import { ProjectCardthree } from "./ProjectCardthree";
import projImg1 from "../assets/img/projectimg1.png";
import projImg2 from "../assets/img/projectimg2.png";
import projImg3 from "../assets/img/projectimg3.png";
import projImg4 from "../assets/img/projectimg4.png";
import projImg5 from "../assets/img/projectimg5.png";
import projImg6 from "../assets/img/projectimg6.png";
import projImg7 from "../assets/img/projectimg7.png";
import projImg8 from "../assets/img/projectimg8.png";
import projImg9 from "../assets/img/projectimg9.png";
import game1 from "../assets/img/game-1.png";
import game2 from "../assets/img/game-2.png";
import game3 from "../assets/img/game-3.png";
import game4 from "../assets/img/game-4.png";
import game5 from "../assets/img/game-5.png";
import game6 from "../assets/img/game-6.png";
import uione from "../assets/img/UI1.png";
import uitwo from "../assets/img/UI2.png";
import uithree from "../assets/img/UI3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Coffee Shop",
      description: "Central Perk",
      imgUrl: projImg1,
    },
    {
      title: "Travel & Tours",
      description: "CPEC Travels",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "SMA Portfolio",
      imgUrl: projImg3,
    },
    {
      title: "Educational Institution",
      description: "EduFord",
      imgUrl: projImg4,
    },
    {
      title: "Hair Studio",
      description: "Barber",
      imgUrl: projImg5,
    },
    {
      title: "Website Developers",
      description: "Design perfection today",
      imgUrl: projImg6,
    },
    {
      title: "Bookshop",
      description: "Bookish",
      imgUrl: projImg7,
    },
    {
      title: "Find your new pet",
      description: "Tindog",
      imgUrl: projImg8,
    },
    {
      title: "Portfolio",
      description: "KS Portfolio",
      imgUrl: projImg9,
    },
  ];

  const projecttwo = [
    {
      title: "Rock Paper Scissors",
      imgUrl: game1,
    },
    {
      title: "Whack a mole",
      imgUrl: game2,
    },
    {
      title: "Memory Game",
      imgUrl: game3,
    },
    {
      title: "Maze Game",

      imgUrl: game4,
    },
    {
      title: "DrumKit",
      imgUrl: game5,
    },
    {
      title: "Dice Game",
      imgUrl: game6,
    },
  ];
  const projectthree = [
    {
      title: "eCommerce Theme",
      imgUrl: uione,
    },
    {
      title: "eBook Theme",
      imgUrl: uitwo,
    },
    {
      title: "Pet Foods & Products",
      imgUrl: uithree,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          These designs were built using HTML, CSS, JavaScript
                          and Reactjs along with the Bootstrap framework for
                          responsive design.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          {" "}
                          I have designed and developed several simple games
                          using HTML, CSS, and JavaScript. Each game was created
                          with the goal of providing a fun and engaging
                          experience for users while also helping me improve my
                          skills as a game developer.
                        </p>
                        <Row>
                          {projecttwo.map((project, index) => {
                            return <ProjectCardtwo key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          As a Frontend Developer, I am passionate about
                          creating intuitive and engaging websites that help
                          users achieve their goals. My design philosophy is
                          centered around user-centric design principles,
                          including simplicity, consistency, and empathy. I
                          believe that great design should be both functional
                          and visually appealing, and should always prioritize
                          the user's needs and expectations.
                        </p>
                        <Row>
                          {projectthree.map((project, index) => {
                            return (
                              <ProjectCardthree key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
