import {
  ForwardedRef,
  ReactNode,
  createRef,
  forwardRef,
  useEffect,
} from "react";
import Typography from "../typography";
import {
  AWS,
  CPP,
  JavaScript,
  Mongo,
  MySQL,
  NestJS,
  NextJS,
  Node,
  PHP,
  Radix,
  React,
  Sass,
  Tailwind,
  TypeScript,
} from "../svg";
import { Lucide } from "../ico";
import { ObjectObserver } from "@/lib/intersection_observer";

const frontend = [
  {
    title: "TailwindCSS",
    icon: <Tailwind size={64} />,
  },
  {
    title: "Sass",
    icon: <Sass size={64} />,
  },
  {
    title: "Lucide",
    icon: <Lucide size={64} />,
  },
  {
    title: "Radix UI",
    icon: <Radix size={64} />,
  },
];

const backend = [
  {
    title: "Next.js",
    icon: <NextJS size={64} />,
  },
  {
    title: "Nest.js",
    icon: <NestJS size={64} />,
  },
  {
    title: "Node.js",
    icon: <Node size={64} />,
  },
  {
    title: "AWS",
    icon: <AWS size={64} />,
  },
  {
    title: "MongoDB",
    icon: <Mongo size={64} />,
  },
  {
    title: "MySQL",
    icon: <MySQL size={64} />,
  },
];

const languages = [
  {
    title: "JavaScript",
    icon: <JavaScript size={64} />,
  },
  {
    title: "TypeScript",
    icon: <TypeScript size={64} />,
  },
  {
    title: "PHP",
    icon: <PHP size={64} />,
  },
  {
    title: "C++",
    icon: <CPP size={64} />,
  },
];

const Card = ({
  title,
  icon,
  className,
}: {
  title: string;
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className ? className : ""} w-[100px] basis-[100px] flex flex-col items-center space-y-4 mx-4 my-5`}
    >
      {icon}
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};

const Technologies = forwardRef(function Technologies(_props, ref) {
  const sectionRefs = {
    frontend: createRef<HTMLDivElement>(),
    backend: createRef<HTMLDivElement>(),
    languages: createRef<HTMLDivElement>(),
  };

  const observerOptions: Omit<IntersectionObserverInit, "root"> = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const objectObserver = new ObjectObserver(sectionRefs, observerOptions);

  useEffect(() => {
    for (const entry of Object.entries(sectionRefs)) {
      objectObserver.getIntersectionObserver().observe(entry[1].current!);
    }
  }, []);

  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] min-h-[80vh] flex justify-center mb-12 transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] py-[100px] rounded-xl justify-center flex flex-col items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography variant="h1">Technologies I Use</Typography>
        <div className="w-full">
          <div
            className="flex flex-col justify-center items-center space-y-8 mt-12 transition-opacity max-w-full"
            ref={sectionRefs.frontend}
            style={{transitionDelay: "150ms", animationDelay: "150ms", animationDuration: "1000ms", transitionDuration: "1000ms"}}
          >
            <Typography variant="h4">Front-end</Typography>
            <div className="flex flex-wrap flex-row items-center justify-center max-w-[100%] ">
              <Card
                className="space-y-[22px]"
                title="React.js"
                icon={<React size={64} />}
              />
              {/* React logo has weird spacing. */}
              {frontend.map((item) => (
                <Card key={item.title} title={item.title} icon={item.icon} />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center space-y-8 mt-12 transition-opacity"
            ref={sectionRefs.backend}
            style={{transitionDelay: "300ms", animationDelay: "300ms", animationDuration: "1000ms", transitionDuration: "1000ms"}}
          >
            <Typography variant="h4">Back-end</Typography>
            <div className="flex flex-wrap justify-center items-center">
              {backend.map((item) => (
                <Card key={item.title} title={item.title} icon={item.icon} />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center space-y-8 mt-12 transition-opacity"
            ref={sectionRefs.languages}
            style={{transitionDelay: "500ms", animationDelay: "500ms", animationDuration: "1000ms", transitionDuration: "1000ms"}}
          >
            <Typography variant="h4">Languages</Typography>
            <div className="flex justify-center items-center flex-wrap">
              {languages.map((item) => (
                <Card key={item.title} title={item.title} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Technologies;
