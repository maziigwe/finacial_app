import React, { useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { HomeNavBar } from "../components/HomeNavBar";
import { ServiceSection } from "../components/ServiceSection";
import "./home.css";

export const Home = () => {
  const [click, setClick] = useState(true);
  return (
    <div className="home">
      <HomeNavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};
