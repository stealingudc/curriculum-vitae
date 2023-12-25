import React, { ForwardedRef, forwardRef, useEffect } from "react";
import Typography from "../typography";
import { Layout, PhoneCall, SearchCode } from "lucide-react";

const Card = forwardRef(function Card(
  {
    icon,
    color,
    children,
    animationDelay,
    animationDuration
  }: {
    icon: React.ReactNode;
    color?: string;
    children?: React.ReactNode | React.ReactNode[];
    animationDelay?: string;
    animationDuration?: string;
  },
  ref
) {
  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className={`flex items-center flex-col space-y-4 text-center px-12 transition-opacity`}
      style={{transitionDelay: `${animationDelay}ms`, animationDelay: `${animationDelay}ms`, animationDuration: `${animationDuration}ms`, transitionDuration: `${animationDuration}ms`}}
    >
      <div
        className={`bg-[rgba(255,255,255,0.01)] p-4 rounded-full border `}
        style={{ borderColor: color ? color : "white" }}
      >
        {icon}
      </div>
      {children}
    </div>
  );
});

const Perks = forwardRef(function Perks(_props, ref) {
  const refs = [
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ];

  function handleScroll(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? ((entry.target as HTMLDivElement).style.opacity = "100")
        : ((entry.target as HTMLDivElement).style.opacity = "0");
      observer.observe(entry.target);
    });
  }

  const observerOptions: Omit<IntersectionObserverInit, "root"> = {
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(handleScroll, observerOptions);

  useEffect(() => {
    for (const ref of refs) {
      observer.observe(ref.current!);
    }
  }, []);

  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] min-h-[80vh] flex justify-center py-12 transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] py-[100px] rounded-xl justify-center flex flex-col items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography variant="h1">You come first.</Typography>
        <div className="px-48 mt-8 text-center">
          <Typography variant="p">
            Throughout my time as a developer, I've gained a deep understanding
            of putting clients first and understanding their needs. I'm
            committed to consistently applying these principles to deliver the
            best possible experience for every client interaction.
          </Typography>
        </div>

        <div className="grid grid-cols-3 justify-center mt-24">
          <Card
            icon={<SearchCode color="#7e003f" />}
            color="#7e003f"
            ref={refs[0]}
            animationDelay="150"
            animationDuration="1000"
          >
            <Typography variant="h3">Back-end development</Typography>
            <Typography variant="p">
              As a back-end developer, I demonstrate a good understanding of
              server-side technologies, ensuring data integrity, optimizing
              performance, and crafting scalable solutions.
            </Typography>
          </Card>
          <Card
            icon={<PhoneCall color="#1d3a79" />}
            color="#1d3a79"
            ref={refs[1]}
            animationDelay="300"
            animationDuration="1000"
          >
            <Typography variant="h3">24/7 support</Typography>
            <Typography variant="p">
              I'm always available and committed to assisting clients. Whether
              it's day or night, I'm here to address any request promptly and
              ensure their needs are met.
            </Typography>
          </Card>
          <Card
            icon={<Layout color="#b59359" />}
            color="#b59359"
            ref={refs[2]}
            animationDelay="500"
            animationDuration="1000"
          >
            <Typography variant="h3">Front-end development</Typography>
            <Typography variant="p">
              As a front-end developer, I specialize in crafting visually
              stunning interfaces and seamless user experiences, bringing a
              perfect blend of design and functionality to every project.
            </Typography>
          </Card>
        </div>
      </div>
      {/* <Typography variant="h1">Long-term, no commitment</Typography> */}
    </div>
  );
});

export default Perks;
