import IconLinks from "./ui/IconLinks";
import DesktopNavigation from "./ui/DesktopNavigation";
import Footer from "./ui/Footer";
import SiteWrapper from "./ui/SiteWrapper";
import FirstView from "./ui/FirstView";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Projects from "./ui/Projects";
import { useRef } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";

function App() {
  const scrollRefs = {
    aboutRef: useRef<HTMLDivElement>(null),
    experienceRef: useRef<HTMLDivElement>(null),
    projectsRef: useRef<HTMLDivElement>(null),
  };
  return (
    <SiteWrapper>
      <div className="flex justify-center">
        <div className="md:block hidden w-[8%] flex-none z-10">
          <IconLinks />
        </div>
        <div className="md:w-[80%] w-full">
          <div className="flex flex-col bg-lined bg-repeat bg-contain px-16 pt-5 pb-32">
            <FirstView />
            <div ref={scrollRefs.aboutRef} className="pt-24 mb-12">
              <About />
            </div>
            <div ref={scrollRefs.experienceRef} className="pt-12">
              <Experience />
            </div>
            <div ref={scrollRefs.projectsRef} className="pt-24">
              <Projects />
            </div>
          </div>
        </div>
        <div className="md:block hidden w-[12%] flex-none relative z-10">
          <DesktopNavigation {...scrollRefs} />
        </div>
      </div>
      <Footer />
    </SiteWrapper>
  );
}

export default App;
