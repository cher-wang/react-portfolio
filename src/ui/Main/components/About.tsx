import aboutImg from "../images/about_img.png";
import { ReactComponent as AboutText } from "../images/about_text.svg";

const Component: React.FC = () => {
  return (
    <div className="flex px-12">
      <div className="basis-2/5 w-fit h-fit flex-none mr-10">
        <img
          src={aboutImg}
          alt="about"
          className="block w-full h-full bg-contain"
        />
      </div>
      <div className="flex flex-col">
        <AboutText className="mb-8" />
        <div className="flex flex-col gap-y-5 text-sm text-zinc-700 tracking-wider leading-relaxed">
          <div>
            Seattle-raised Chinese American who took a break from her web
            development career &amp; escaped to Japan for some soul-searching
            for the past few years. That part’s not exactly done, but I’ve
            nevertheless started coming back to web development as a
            <span className="font-bold text-spring-green-200 px-1">
              freelance front-end engineer
            </span>
            with a focus on intentional design with intuitive interfaces.
          </div>
          <div>
            The other half of my time is dedicated to bringing all my personal
            projects to life. There’s a lot! Digital and traditional media
            illustrations, a cozy game populated with cute bears, baking and
            food photography, and plenty more to keep me busy for a long time.
            <span className="font-bold text-aquamarine px-1">
              I’m always down to collaborate on interesting projects!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
