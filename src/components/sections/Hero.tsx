import { ForwardedRef, forwardRef } from "react";
import { Button } from "../shadcn/ui/button";
import Typography from "../typography";

const Hero = forwardRef(function Hero(_props, ref) {
  return (
    <div
      ref={ref as ForwardedRef<HTMLDivElement>}
      className="w-[100vw] h-[80vh] flex justify-center pt-24 transition-opacity duration-500"
    >
      <div
        className=" w-[80vw] grid grid-cols-2 py-[100px] rounded-xl"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex flex-col col-span-1 justify-center items-center">
          <div className="px-12">
            <Typography variant="h1">
              A versatile developer for your next project.
            </Typography>
            <Typography variant="p">
              I'm a full-stack developer with a passion for creating beautiful
              and functional applications.
            </Typography>
            <div className="flex mt-8 justify-end space-x-4">
              <Button variant="outline" className="rounded">
                View Projects
              </Button>
              <Button variant="outline" className="rounded">
                View Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="mr-12 p-0" src="https://placehold.co/600x400.png"></img>
        </div>
        
      </div>
    </div>
  );
});

export default Hero;
