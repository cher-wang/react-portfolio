import About from "./components/About";
import Experience from "./components/Experience";
import FirstView from "./components/FirstView";
import Projects from "./components/Projects/index";

const Component: React.FC = () => {
  return (
    <main className="flex-1 overflow-x-hidden">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-24 bg-lined bg-repeat bg-contain px-16 pt-5 pb-32 max-w-[85%]">
          <FirstView />
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Component;
