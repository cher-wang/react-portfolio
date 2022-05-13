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
};

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  color,
  showFrom,
  showTo,
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
    <div className="flex w-[12%]">
      <div
        className={classnames(
          "h-8 w-1/4 flex-none",
          showTab ? "opacity-40" : "opacity-0",
          menuColor
        )}
      />
      <div
        className={classnames(
          "h-8 pl-4 w-full flex items-center text-white tracking-widest font-bold text-xs",
          menuColor
        )}
      >
        {name}
      </div>
    </div>
  );
};
const Component: React.FC = () => {
  const aboutTop = 600;
  const experienceTop = 900;
  const projectsTop = 1800;
  const menuItems = [
    {
      name: "about me",
      color: MenuItemColors.MistyBlue,
      showFrom: aboutTop,
      showTo: experienceTop,
    },
    {
      name: "experience",
      color: MenuItemColors.SpringGreen,
      showFrom: experienceTop,
      showTo: projectsTop,
    },
    {
      name: "projects",
      color: MenuItemColors.Aquamarine,
      showFrom: projectsTop,
      showTo: projectsTop + 900,
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
