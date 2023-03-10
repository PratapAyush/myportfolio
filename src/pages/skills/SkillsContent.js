import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import  {Calender}  from './Calender';
import "./SkillContentStyles.css"
import {Stats} from './Stats';

export const SkillsContent = () => {
  return (
    <div className="skills">
      <h1 className="pt-3 text-center font-details-b pb-3">Skills</h1>
      <div className="skills-container">
        <Container >
          <Image 
            src="https://portfolio-jagadish-hospet.vercel.app/html.svg"
            alt="img"
          />
          <p>HTML</p>
        </Container>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/css.svg"
            alt="img"
          />
          <p>CSS</p>
        </div>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/js.svg"
            alt="img"
          />
          <p>JavaScript</p>
        </div>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/react.svg"
            alt="img"
          />
          <p>React</p>
        </div>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/redux.svg"
            alt="img"
          />
          <p>Redux</p>
        </div>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/mui.svg"
            alt="img"
          />
          <p>Material UI</p>
        </div>
        <div>
          <img
            src="https://portfolio-jagadish-hospet.vercel.app/git.svg"
            alt="img"
          />
          <p>GIT</p>
        </div>
        <div>
          <img src="https://gayathry-portfolio.vercel.app/ts.png" alt="img" />
          <p>TypeScript</p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/41/95/cf/4195cf989fac0128a89669f40a1e3496.png"
            alt="img"
          />
          <p>BootStrap</p>
        </div>
        <div>
          <img
            src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
            alt="img"
          />
          <p>Chakra UI</p>
        </div>
      </div>

      <Container style={{marginTop:"2rem"}}>
        <Calender />
      </Container>

      <Container>
        <Stats />
      </Container>
    </div>
  );
}
