import React, { ForwardedRef, forwardRef } from "react";
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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";
import { Link } from "lucide-react";

const projects = [
  {
    title: "BjorgArt",
    description:
      "A web store for a small business selling handmade leather and stained glass products. Built with Next.js, uses MongoDB and Google Cloud. Closed-source, as per the client's request.",
    image: "/bjorgart.png",
    link: "https://bjorgart.vercel.app",
  },
  {
    title: "Lidl Recipe Webscraper",
    description:
      "A webscraper that scrapes recipes from the Lidl website and returns them in JSON-serialized format. Built with Nest.js and PhantomJS.",
    image: "/lidl.png",
    link: "https://github.com/stealingudc/lidl-recipe-scraper"
  }
];

const ProjectCard = (props: (typeof projects)[number]) => (
  <>
    <Card className=" border-0">
      <img className="border rounded-xl" src={props.image}></img>
      <CardHeader>
        <CardTitle className="mb-2 underline">
          <a
            href={props.link}
            target="_blank"
            className="hover:cursor-pointer flex items-center"
          >
            {props.title}
            <Link className="ml-2" size={20} />
          </a>
        </CardTitle>
        <CardDescription>{props.description}</CardDescription>
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
        className=" w-[80vw] py-[100px] rounded-xl justify-between flex flex-col items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography variant="h1">My Projects</Typography>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="max-w-3xl"
          >
            <CarouselContent className="mx-4">
              {projects.map((project, i) => (
                <CarouselItem key={i}>
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
});

export default Projects;
