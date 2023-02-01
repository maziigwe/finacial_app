import React, { useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { HomeNavBar } from "../components/HomeNavBar";
import { NewsSection } from "../components/NewsSection";
import { ServiceSection } from "../components/ServiceSection";
import { StatisticSection } from "../components/StatisticSection";
import { TeamSection } from "../components/TeamSection";
import "./home.css";

export const Home = () => {
  const [click, setClick] = useState(true);
  return (
    <div className="home">
      <HomeNavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <FeaturesSection />
      <StatisticSection />
      <TeamSection />
      <NewsSection />
      <Footer />
    </div>
  );
};
