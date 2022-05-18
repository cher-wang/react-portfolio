import IconLinks from "./ui/IconLinks";
import DesktopNavigation from "./ui/DesktopNavigation";
import Footer from "./ui/Footer";
import SiteWrapper from "./ui/SiteWrapper";
import FirstView from "./ui/FirstView";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Projects from "./ui/Projects";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const scrollRefs = {
    aboutRef: useRef<HTMLDivElement>(null),
    experienceRef: useRef<HTMLDivElement>(null),
    projectsRef: useRef<HTMLDivElement>(null),
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SiteWrapper>
              <div className="flex justify-center">
                <div className="md:block hidden w-[10%] flex-none z-10">
                  <IconLinks />
                </div>
                <div className="w-full flex-1 overflow-x-hidden md:max-w-[1200px]">
                  <div className="flex flex-col bg-lined bg-repeat bg-contain pb-12 md:px-5 md:pt-5 md:pb-32">
                    <FirstView />
                    <div
                      ref={scrollRefs.aboutRef}
                      className="pt-8 md:pt-24 md:mb-12"
                    >
                      <About />
                    </div>
                    <div ref={scrollRefs.experienceRef} className="pt-12 mb-12">
                      <Experience />
                    </div>
                    <div ref={scrollRefs.projectsRef} className="md:pt-12">
                      <Projects />
                    </div>
                  </div>
                </div>
                <div className="md:block hidden w-[15%] flex-none relative">
                  <DesktopNavigation {...scrollRefs} />
                </div>
              </div>
              <Footer />
            </SiteWrapper>
          }
        />
        <Route path="/personal-projects" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
