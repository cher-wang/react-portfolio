import splashImg from "../assets/splash_img.png";
import splashImgWebp from "../assets/splash_img.webp";
import { ReactComponent as SplashTextHi } from "../assets/splash_text_hi.svg";
import { ReactComponent as SplashTextCheryl } from "../assets/splash_text_cheryl.svg";
import { ReactComponent as SplashTextDesc } from "../assets/splash_text_desc.svg";
import { ReactComponent as SplashTextDescMini } from "../assets/splash_text_desc_mini.svg";

const Component: React.FC = () => {
  const splashImgClass =
    "block w-full h-full object-cover object-center md:object-contain";
  return (
    <div className="flex relative">
      <div className="overflow-hidden h-screen border-[10px] border-gray-100 drop-shadow md:h-full md:w-[full]">
        <img src={splashImgWebp} alt={splashImg} className={splashImgClass} />
      </div>
      <div className="absolute hidden items-baseline w-full pt-[20%] md:flex">
        <div className="w-[17%] basis-[17%]" />
        <SplashTextHi className="w-[30%] basis-[30%]" />
        <div className="w-[8%] basis-[8%]" />
        <div className="flex flex-col w-[30%] basis-[30%] items-start">
          <SplashTextCheryl className="w-full" />
          <SplashTextDesc className="mt-[2%] w-full" />
        </div>
      </div>
      <SplashTextHi className="absolute md:hidden top-[9%] right-[35%] max-w-[140px]" />
      <div className="absolute md:hidden top-[55%] right-[5%] min-w-[160px]">
        <SplashTextDescMini className="w-full h-full" />
      </div>
    </div>
  );
};

export default Component;
