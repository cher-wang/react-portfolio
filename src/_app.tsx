import IconLinks from "./ui/IconLinks";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import SiteWrapper from "./ui/SiteWrapper";
import FirstView from "./ui/FirstView";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Projects from "./ui/Projects";

function App() {
  return (
    <SiteWrapper>
      <div className="flex justify-center w-full">
        <div className="w-[8%] flex-none">
          <IconLinks />
        </div>
        <div className="w-[80%] flex-none">
          <main className="flex-1 overflow-x-hidden relative">
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-24 bg-lined bg-repeat bg-contain px-16 pt-5 pb-32">
                <FirstView />
                <About />
                <Experience />
                <Projects />
              </div>
            </div>
          </main>
        </div>
        <div className="w-[12%] flex-none relative">
          <Navigation />
        </div>
      </div>
      <Footer />
    </SiteWrapper>
  );
}

export default App;
