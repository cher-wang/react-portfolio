import { ReactComponent as ProjectsText } from "../../images/projects_text.svg";
import defaultImg from "../../images/default_img.svg";
import ProjectGrid from "./components/ProjectGrid";

export type Project = {
  title: string;
  tags: string[];
  period: string;
  link: string;
  previewImg: any;
  previewDescription: string;
};

const Component: React.FC = () => {
  const sampleProject: Project = {
    title: "Sample Project Title",
    tags: ["illustration", "personal project", "web"],
    period: "AUG 2019 ~ NOW",
    link: "https://www.rivaliq.com/channels/instagram-analytics/",
    previewImg: defaultImg,
    previewDescription:
      "brief description brief description brief description brief description brief description brief  brief description brief description brief description brief description brief description brief description.",
  };
  const projects: Project[] = new Array(10).fill(null).map((_, index) => {
    const project = { ...sampleProject };
    project.title += index;
    return project;
  });
  return (
    <div className="px-16">
      <ProjectsText />
      {/* <div>filters</div> */}
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Component;
