import React from "react";

import AppHeader from "../components/AppHeader";
import Business from "../components/Business";
import Footer from "../components/Footer";
import HappyUsers from "../components/HappyUsers";

import Platform from "../components/Platform";
import PlatformTech from "../components/PlatformTech";

function Index() {
  return (
    <>
      <AppHeader />
      <Business />
      <Platform />

      <PlatformTech />

      <HappyUsers />
      <Footer />
    </>
  );
}

export default Index;
