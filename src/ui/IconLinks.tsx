import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component: React.FC = () => {
  const iconButtonClass =
    "flex items-center justify-center h-12 w-12 rounded-full text-misty-blue-200 hover:bg-white/80";
  return (
    <div className="flex flex-col fixed bottom-7 left-8 w-[8%] items-center text-xl">
      <a
        href="https://www.instagram.com/cheroppii"
        target="_blank"
        className={iconButtonClass}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.twitter.com/cheroppii"
        target="_blank"
        className={iconButtonClass}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.linkedin.com/in/cherzwang/"
        target="_blank"
        className={iconButtonClass}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/cher-wang"
        target="_blank"
        className={iconButtonClass}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
    </div>
  );
};

export default Component;
