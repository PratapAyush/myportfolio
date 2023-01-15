import React from 'react'
import GitHubCalendar from "react-github-calendar";
 import "./SkillContentStyles.css"
import Container from "react-bootstrap/Container";

export const Calender = () => {
  return (
    <Container>
      <h1 className="pt-3 text-center font-details-b pb-3">Github Calender</h1>
      <Container style={{ backgroundColor: "#15161e" ,border:"1px solid red"}} >
        <GitHubCalendar username="PratapAyush" />
      </Container>
    </Container>
  );
}