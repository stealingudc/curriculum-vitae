import Typography from "../typography";
import { Github, Sparkles } from "lucide-react";
import "@/css/navbar.css";
import { StackOverflow } from "../svg";
import { forwardRef } from "react";

const Navbar = forwardRef(function Navbar(_props, ref) {
  return (
    <div
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      className="w-full h-14 flex px-24 my-1 justify-between sticky top-0 z-50"
    >
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white hover:text-neutral-300">
          <div className="flex items-center space-x-2">
            <Sparkles />
            <Typography variant="h3">Vladimir Damian</Typography>
          </div>
        </a>
        <a href="/blog">
          <Typography variant="p">Blog</Typography>
        </a>
        <a href="/projects">
          <Typography variant="p">Projects</Typography>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/stealingudc">
          <Github />
        </a>
        <a href="https://stackoverflow.com/users/21427218/stealing-society">
          <StackOverflow />
        </a>
      </div>
    </div>
  );
});

export default Navbar;
