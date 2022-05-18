import { ReactComponent as ExperienceText } from "../assets/experience_text.svg";
import { ReactComponent as ExperienceTextMobile } from "../assets/experience_text_mobile.svg";

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
    <div className="flex flex-col px-6 md:block md:px-16">
      <ExperienceText className="hidden mb-8 md:block" />
      <div className="w-full mb-5 md:hidden">
        <ExperienceTextMobile />
      </div>
      <div className="flex flex-col w-60 gap-y-4 text-sm tracking-wider leading-relaxed ml-2 md:ml-0 md:w-full">
        {experienceItems.map((item) => (
          <div
            key={item.period}
            className="flex flex-col md:flex-row md:items-baseline"
          >
            <div className="md:w-1/2 md:text-right md:basis-1/2 md:pr-16 font-bold text-spring-green-300 flex-none">
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
