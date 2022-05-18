import { useRef, useState } from "react";
import ProjectPreview from "./ProjectPreview";
import { Project } from "../index";
type Props = {
  projects: Project[];
  numCols?: number;
};

const Component: React.FC<Props> = ({ projects, numCols = 5 }) => {
  let gridRows: Project[][] = [];
  projects.forEach((project, index) => {
    const gridRowIndex = Math.floor(index / numCols);
    if (!gridRows[gridRowIndex]) {
      gridRows[gridRowIndex] = [];
    }
    if (gridRows[gridRowIndex]) {
      gridRows[gridRowIndex].push(project);
    }
  });

  const [activeRowIndex, setActiveRowIndex] = useState(-1);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const currentRowPreviewRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-y-3">
      {gridRows.map((row, rowIndex) => (
        <div key={"gridRow" + rowIndex} className="flex flex-col">
          <div className="flex gap-x-3">
            {row.map((project, index) => (
              <div
                key={project.title}
                className="aspect-square rounded cursor-pointer"
                onClick={() => {
                  if (
                    rowIndex === activeRowIndex &&
                    index === activeItemIndex
                  ) {
                    setActiveRowIndex(-1);
                    setActiveItemIndex(-1);
                  } else {
                    setActiveRowIndex(rowIndex);
                    setActiveItemIndex(index);
                  }
                }}
              >
                <img
                  src={project.previewImg}
                  alt="default"
                  className="block w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
          {activeRowIndex === rowIndex && activeItemIndex >= 0 && (
            <div
              ref={currentRowPreviewRef}
              onLoad={() =>
                currentRowPreviewRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <ProjectPreview
                project={gridRows[activeRowIndex][activeItemIndex]}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Component;
