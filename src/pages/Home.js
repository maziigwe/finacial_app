import React from "react";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { HomeNavBar } from "../components/HomeNavBar";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <HomeNavBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};
