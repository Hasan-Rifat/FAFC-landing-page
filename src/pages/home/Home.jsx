import React from "react";
import Avatar from "../../components/Home/Avatar";
import About from "../../components/Home/About";
import Hero from "../../components/Home/Hero";
import Football from "../../components/Home/Football";
import ImagesSection from "../../components/Home/ImagesSection";
import Community from "../../components/Home/Community";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Avatar />
      <Football />
      <ImagesSection />
      <Community />
    </>
  );
};

export default Home;
