import { Link } from "react-router-dom";
import aboutImg from "../assets/about_img.png";
import { ReactComponent as AboutText } from "../assets/about_text.svg";

const Component: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:px-12 md:flex-row md:items-start">
      <div className="hidden basis-2/5 w-fit h-fit flex-none md:block">
        <img
          src={aboutImg}
          alt="about"
          className="block w-full h-full bg-contain"
        />
      </div>
      <div className="flex flex-col mt-6 px-7 md:mt-0">
        <AboutText className="h-16 mb-6 -ml-3 md:ml-0 md:h-fit md:w-fit md:mb-8" />
        <div className="flex flex-col gap-y-5 text-sm text-zinc-700 tracking-wider leading-relaxed">
          <div>
            Nice to meet you! I was born in China, raised in Seattle, and after
            graduating there I did a stint as a full-stack web dev for a while.
            After that I decided to escape to Japan for some soul-searching,
            which is still ongoing &#128517;, but I've recently full-circled
            myself back to web dev as a
            <span className="font-bold text-aquamarine-200 px-1">
              freelance front-end engineer
            </span>
            focused on intentional design &#38; intuitive interfaces.
          </div>
          <div>
            I've been spending the rest of my time on making stuff like
            illustrations, a cozy game populated with cute bears, baking and
            food photography, etc etc. More details
            <Link to="/personal-projects" target="_blank">
              {" "}
              here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
