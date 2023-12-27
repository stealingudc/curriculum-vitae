import { ForwardedRef, ReactNode, forwardRef } from "react";
import Typography from "../typography";
import { Link } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";

import UnitBV from "/unitbv.svg";
import Code from "/code.svg";
import Controller from "/controller.svg";

type CardProps = {
  title: string;
  content: ReactNode;
  image: string;
  link?: string;
};

const AboutCard = forwardRef(function AboutCard(props: CardProps, _ref) {
  const { title, content, image, link } = props;
  return (
    <Card
      className="flex lg:flex-row flex-col sm:p-8 sm-[65%] lg:w-[80%] xl:w-[65%] w-[80%] p-0 self-center rounded-xl sm:text-start text-center"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <CardHeader className="self-center sm:ml-4 ml-0 space-y-4 sm:space-x-8 space-x-0 md:flex-row flex-col items-center">
        <div className="flex flex-col lg:items-center items-start justify-center space-y-2 md:self-start self-center sm:text-start text-center">
          <div className="bg-white h-24 w-24 rounded-full">
            <img
                className="w-24 h-24"
              src={image}
              alt={title}
            />
          </div>

          <a
            className="flex items-center space-x-1 border-b self-center"
            href={link}
            target="_blank"
          >
            {link ? (
              <>
                <p>Link</p> <Link size={16} />
              </>
            ) : null}
          </a>
        </div>
        <div className="flex flex-col sm:space-y-0 space-y-2 sm:mt-0 mt-4">
          <CardTitle className="mb-2 underline">{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
});

const cards: CardProps[] = [
  {
    title: "I'm a hard-working student.",
    content: (
      <>
        <span>I study Electrical Engineering and Computer Science at </span>
        <span className="text-blue-400">University of Transilvania </span>
        <span>in Brasov.</span>
      </>
    ),
    image: UnitBV,
    link: "https://iesc.unitbv.ro",
  },
  {
    title: "I love coding in my free time.",
    content: (
      <>
        <span>
          Whether it's working on my Linux install or just random shower ideas,
          I always keep myself busy with{" "}
        </span>
        <span className="text-blue-400">finding solutions </span>
        <span>to day-to-day problems that come up.</span>
      </>
    ),
    image: Code,
  },
  {
    title: "I play lots of video games.",
    content: (
      <>
        <span>
          I love video games, both casual and competitive. I ocasionally play
          games like{" "}
        </span>
        <span className="text-orange-400">Counter-Strike</span>
        <span>{", "}</span>
        <span className="text-purple-400">Terraria</span>
        <span>{", "}</span>
        <span className="text-green-400">Minecraft</span>
        <span>{" - "}the classics.</span>
      </>
    ),
    image: Controller,
  },
];

const About = forwardRef(function About(_props, ref) {
  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] min-h-[80vh] flex justify-center transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] py-[100px] rounded-xl flex justify-start flex-col space-y-12"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex flex-col text-center space-y-4 w-full">
          <Typography variant="h1">About Me</Typography>
        </div>
        {cards.map((card) => (
          <AboutCard {...card} />
        ))}
      </div>
    </div>
  );
});

export default About;
