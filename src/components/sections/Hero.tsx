import { ForwardedRef, forwardRef } from "react";
import { Button } from "../shadcn/ui/button";
import Typography from "../typography";

const Hero = forwardRef(function Hero(
  props: { projectRef: ForwardedRef<HTMLDivElement> },
  ref
) {
  const projectRef = props.projectRef as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] min-h-[80vh] flex justify-center transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] flex flex-col justify-center items-center py-[100px] rounded-xl text-center  p-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography variant="h1">
          A versatile developer for your next project.
        </Typography>
        <Typography variant="p">
          I'm a full-stack developer with a passion for creating beautiful and
          functional applications.
        </Typography>
        <div className="flex mt-8 justify-center space-x-4">
          <Button
            variant="outline"
            className="rounded"
            onClick={() => {
              projectRef.current?.scrollIntoView();
            }}
          >
            View Projects
          </Button>
          <a href="/Vladimir-Dragos-Damian_CV.pdf" target="_blank">
          <Button variant="outline" className="rounded">
            View Resume
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Hero;
