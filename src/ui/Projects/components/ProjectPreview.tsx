import { Project } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
type Props = {
  project: Project;
};

const Component: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col gap-y-3 py-5">
      <div className="text-aquamarine font-bold text-2xl tracking-wider">
        {project.title}
      </div>
      <div className="flex gap-x-5">
        {project.tags.map((tag) => (
          <div
            key={project.title + tag}
            className="rounded border border-misty-blue-200 text-misty-blue-200 px-2 py-1 uppercase text-[10px] tracking-wider font-bold"
          >
            {tag}
          </div>
        ))}
      </div>
      <picture className="w-full">
        <img
          src={project.previewImg}
          alt="project"
          className="block w-full h-full"
        />
      </picture>
      <div className="text-zinc-400 font-semibold tracking-wider text-xs">
        {project.period}
      </div>
      <div className="tracking-wider text-zinc-600 leading-relaxed">
        {project.previewDescription}
      </div>
      <a
        href={project.link}
        className="flex gap-x-2 items-baseline text-aquamarine text-sm font-bold"
      >
        <div>check it out</div>
        <FontAwesomeIcon icon={faUpRightFromSquare} className="text-xs" />
      </a>
    </div>
  );
};

export default Component;
