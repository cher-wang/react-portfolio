import aboutImg from "../assets/about_img.png";
import { ReactComponent as AboutText } from "../assets/about_text.svg";

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
            Hey, nice to meet you! I was born in China, raised in Seattle, and
            after working as a full-stack web dev for a while after graduating I
            decided to just, you know, escape to Japan for some soul-searching.
            That part’s not exactly done, but that's besides the point &#128517;
            What's important is, I've recently full-circled myself back to web
            dev as a
            <span className="font-bold text-spring-green-200 px-1">
              freelance front-end engineer
            </span>
            , this time with a focus on intentional design with intuitive
            interfaces. I'm excited to learn more here!
          </div>
          <div>
            The other half of my time is dedicated to bringing all my personal
            projects to life. There’s a lot! Digital and traditional media
            illustrations, a cozy game populated with cute bears, baking and
            food photography, and plenty more to keep me busy for a long time.
            <span className="font-bold text-aquamarine-200 px-1">
              If you have a project in mind, definitely let me know!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
