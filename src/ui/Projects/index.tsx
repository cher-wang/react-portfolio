import { ReactComponent as ProjectsText } from "../../assets/projects_text.svg";
import defaultImg from "../../assets/default_img.svg";
import ProjectGrid from "./components/ProjectGrid";
import { useBreakpointValue } from "@chakra-ui/media-query";

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
  const numCols = useBreakpointValue({ base: 2, md: 5 });
  return (
    <div className="px-5 md:px-16">
      <ProjectsText className="w-full md:w-auto" />
      {/* <div>filters</div> */}
      <ProjectGrid projects={projects} numCols={numCols} />
    </div>
  );
};

export default Component;
