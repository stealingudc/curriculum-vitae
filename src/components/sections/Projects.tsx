import { ForwardedRef, forwardRef } from "react";
import Typography from "../typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";
import { Link, MoveHorizontal } from "lucide-react";

import BjorgArtImage from "/bjorgart.png";
import LidlImage from "/lidl.png";
import GitHubImage from "/github.webp";

const projects = [
  {
    title: "BjorgArt",
    description:
      "A web store for a small business selling handmade leather and stained glass products. Built with Next.js, uses MongoDB and Google Cloud. Closed-source, as per the client's request.",
    image: BjorgArtImage,
    link: "https://bjorgart.vercel.app",
  },
  {
    title: "Lidl Recipe Webscraper",
    description:
      "A webscraper that scrapes recipes from the Lidl website and returns them in JSON-serialized format. Built with Nest.js and PhantomJS.",
    image: LidlImage,
    link: "https://github.com/stealingudc/lidl-recipe-scraper",
  },
  {
    title: "View more on my GitHub",
    description: "I have many more projects on my GitHub page.",
    image: GitHubImage,
    link: "https://github.com/stealingudc",
  },
];

const ProjectCard = ({
  title,
  description,
  image,
  link,
}: (typeof projects)[number]) => (
  <>
    <Card className=" border-0">
      <img className="border rounded-xl" src={image}></img>
      <CardHeader className="px-2">
        <CardTitle className="mb-2 underline">
          <a
            href={link}
            target="_blank"
            className="hover:cursor-pointer flex items-center"
          >
            {title}
            <Link className="ml-2" size={20} />
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  </>
);
const Projects = forwardRef(function Projects(_props, ref) {
  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] min-h-[80vh] flex justify-center mb-12 transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] rounded-xl pt-12 flex flex-col justify-center items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography variant="h1">My Projects</Typography>
        <div className="mt-12 flex flex-row justify-center w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="sm:max-w-3xl max-w-[80%]"
          >
            <CarouselContent className="mx-4">
              {projects.map((project, i) => (
                <CarouselItem key={i}>
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sm:flex hidden" />
            <CarouselNext className="sm:flex hidden" />
          </Carousel>
        </div>
        <div className="sm:hidden mb-8 flex flex-col items-center">
          <MoveHorizontal />
          <p className=" text-neutral-400 italic">Swipe to see more...</p>
        </div>
      </div>
    </div>
  );
});

export default Projects;
