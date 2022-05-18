import classnames from "classnames";
import { useEffect, useState } from "react";

enum MenuItemColors {
  MistyBlue,
  Aquamarine,
  SpringGreen,
}

type MenuItemProps = {
  name: string;
  color: MenuItemColors;
  showFrom: number;
  showTo: number;
  itemRef?: React.RefObject<HTMLDivElement>;
};

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  color,
  showFrom,
  showTo,
  itemRef,
}) => {
  const [showTab, setShowTab] = useState(false);

  const listenToScroll = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition < showFrom || scrollPosition > showTo) {
      setShowTab(false);
    } else {
      setShowTab(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  const menuColor = {
    "bg-misty-blue-100": color === MenuItemColors.MistyBlue,
    "bg-spring-green-100": color === MenuItemColors.SpringGreen,
    "bg-aquamarine-100": color === MenuItemColors.Aquamarine,
  };

  return (
    <div className="flex w-[15%]">
      <div
        className={classnames(
          "h-8 w-1/5 flex-none",
          showTab ? "opacity-40" : "opacity-0",
          menuColor
        )}
      />
      <div
        className={classnames(
          "h-8 pl-4 w-full flex items-center cursor-pointer",
          menuColor
        )}
        onClick={() => itemRef?.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <div
          className={classnames(
            "text-white tracking-widest font-semibold text-sm",
            showTab ? "opacity-100" : "opacity-80"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
};

const Component: React.FC<Props> = ({
  aboutRef,
  experienceRef,
  projectsRef,
}) => {
  const aboutTop = 600;
  const experienceTop = 900;
  const projectsTop = 1800;
  const menuItems = [
    {
      name: "about me",
      color: MenuItemColors.MistyBlue,
      showFrom: aboutRef.current?.getBoundingClientRect().top || aboutTop,
      showTo:
        experienceRef.current?.getBoundingClientRect().top || experienceTop,
      itemRef: aboutRef,
    },
    {
      name: "experience",
      color: MenuItemColors.SpringGreen,
      showFrom:
        experienceRef.current?.getBoundingClientRect().top || experienceTop,
      showTo: projectsRef.current?.getBoundingClientRect().top || projectsTop,
      itemRef: experienceRef,
    },
    {
      name: "projects",
      color: MenuItemColors.Aquamarine,
      showFrom: projectsRef.current?.getBoundingClientRect().top || projectsTop,
      showTo:
        projectsRef.current?.getBoundingClientRect().bottom ||
        projectsTop + 1000,
      itemRef: projectsRef,
    },
  ];
  return (
    <div className="flex flex-col gap-y-2 items-end fixed mt-10 mr-[3%] top-0 right-0 w-full">
      {menuItems.map((item) => (
        <MenuItem key={`nav-${item.name}`} {...item} />
      ))}
    </div>
  );
};

export default Component;
