import { ReactComponent as ExperienceText } from "../assets/experience_text.svg";

const Component: React.FC = () => {
  const experienceItems = [
    {
      period: "MAR 2022 - present",
      position: ["front-end web developer"],
      details: ["Freelance", "Japan"],
    },
    {
      period: "JULY 2020 - MAR 2022",
      position: ["English teacher"],
      details: ["J Prep A+", "Japan"],
    },
    {
      period: "SEPT 2019 - JUNE 2020",
      position: ["English teacher"],
      details: ["My Gym", "Japan"],
    },
    {
      period: "JAN 2019 - SEPT 2019",
      position: ["English teacher"],
      details: ["AEON English Conversation School", "Japan"],
    },
    {
      period: "JUNE 2017 - DEC 2018",
      position: ["full-stack web developer"],
      details: ["RivalIQ", "Seattle, USA"],
    },
    {
      period: "graduated DEC 2017",
      position: [
        "Bachelor’s in Computer Science",
        "Bachelor’s in Interdisciplinary Visual Arts",
      ],
      details: ["University of Washington", "Seattle, USA"],
    },
  ];
  return (
    <div className="px-16">
      <ExperienceText className="mb-8" />
      <div className="flex flex-col gap-y-4 text-sm tracking-wider leading-relaxed">
        {experienceItems.map((item) => (
          <div key={item.period} className="flex items-baseline">
            <div className="w-1/2 text-right basis-1/2 pr-16 font-bold text-spring-green-300 flex-none">
              {item.period}
            </div>
            <div className="flex flex-col text-zinc-600">
              {item.position.map((position) => (
                <div key={(item.period, position)} className="font-bold">
                  {position}
                </div>
              ))}
              {item.details.map((detail) => (
                <div key={(item.period, detail)}>{detail}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
