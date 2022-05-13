import splashImg from "../assets/splash_img.png";
import { ReactComponent as SplashTextHi } from "../assets/splash_text_hi.svg";
import { ReactComponent as SplashTextCheryl } from "../assets/splash_text_cheryl.svg";
import { ReactComponent as SplashTextDesc } from "../assets/splash_text_desc.svg";

const Component: React.FC = () => {
  return (
    <div className="flex relative">
      <img
        src={splashImg}
        alt="splash"
        className="block w-full h-full bg-contain"
      />
      <div className="absolute flex items-baseline w-full pt-[20%]">
        <div className="w-[17%] basis-[17%]" />
        <SplashTextHi className="w-[30%] basis-[30%]" />
        <div className="w-[8%] basis-[8%]" />
        <div className="flex flex-col w-[30%] basis-[30%] items-start">
          <SplashTextCheryl className="w-full" />
          <SplashTextDesc className="mt-[2%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Component;
