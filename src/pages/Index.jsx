import React from "react";
import AccelerationProcess from "../components/AccelerationProcess";
import AppHeader from "../components/AppHeader";
import Business from "../components/Business";
import Footer from "../components/Footer";
import HappyUsers from "../components/HappyUsers";
import Overview from "../components/Overview";
import Platform from "../components/Platform";
import PlatformTech from "../components/PlatformTech";

function Index() {
  return (
    <>
      <AppHeader />
      <Business />
      <Platform />
      <Overview />
      <PlatformTech />
      <AccelerationProcess />
      <HappyUsers />
      <Footer />
    </>
  );
}

export default Index;
