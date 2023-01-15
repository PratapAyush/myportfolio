import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ApnaMart from "../../assets/img/projects/ApnaMart.PNG";
import Orbitz from "../../assets/img/projects/orbitz.gif";
import Kalyan from "../../assets/img/projects/kalyan.gif";
import PharmEasy from "../../assets/img/projects/Pharmeasy.png";

import "./projects-timelines.style.css";
const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Apna Mart */}

          <ImageEvent
            date="November/2022"
            className="text-center"
            text="ApnaMart"
            src={ApnaMart}
            alt="ApnaMart"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Choose and Buy Online
                        Grocery from a wide range of fruits, vegetables, baby
                        care products, personal care products and much more.
                        Shop Now !
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            React | React-Redux | Chakraui | Nodejs | Express |
                            Mongodb{" "}
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://melodic-cajeta-0d68b5.netlify.app//"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/Lokesh777/temporary-partner-4254"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>

          {/* Project: Orbitz */}

          <ImageEvent
            date="August/2022"
            className="text-center"
            text="Orbitz:cloned"
            src={Orbitz}
            alt="Orbitz"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        Orbitz is one of several online booking platforms that
                        make it simple to book flights, hotels, rental cars,
                        cruises, activities and travel packages.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            React | React-Redux | Chakraui | MaterialUi |
                            JSON-Server | Redux-thunk{" "}
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://subtle-arithmetic-05aa1f.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/PratapAyush/-lucky-stone-5708"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>

          {/* Project: Kalyan Jeweller*/}
          <ImageEvent
            date="May/2022"
            className="text-center"
            text=" Kalyan Jeweller : cloned"
            src={Kalyan}
            alt="pharma"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Kalyan Jewellers is one of
                        India's most trusted online jewellery stores gold and
                        diamond products.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML|CSS|JAVASCRIPT|FONT AWESOME</li>
                          {/* <li>Login with OTP.</li> */}
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://cheerful-selkie-bdd7b4.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/DeepanshuChugh/KalyanJewellers"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Pharmeasy */}

          <ImageEvent
            date="March/2022"
            className="text-center"
            text="Pharmeasy"
            src={PharmEasy}
            alt="Pharmeasy"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> PharmEasy is a consumer
                        healthcare “super app” that provides consumers with
                        on-demand, home delivered access to a wide range of
                        prescription, OTC pharmaceutical, other consumer
                        healthcare products, comprehensive diagnostic test
                        services, and teleconsultations thereby serving their
                        healthcare needs
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML | CSS | Javascript </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://fantastic-kangaroo-4a5ceb.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/PratapAyush/-max-mass-5990"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
