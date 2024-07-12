import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";

function HomeScreen() {
  return (
    <>
      <Hero></Hero>
      <Skills></Skills>
      <Profile></Profile>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default HomeScreen;
