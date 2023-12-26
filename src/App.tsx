import React, { useEffect } from "react";
import Background from "./components/sections/Background";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Perks from "./components/sections/Perks";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";

// const lipsum =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed bibendum dui. Sed fermentum nulla eget magna placerat, ut euismod erat posuere. Morbi tincidunt vehicula semper. Mauris pulvinar lacinia leo, quis feugiat augue semper et. Vivamus eleifend interdum diam id pretium. Sed rhoncus egestas imperdiet. Duis molestie condimentum felis, non hendrerit lorem fringilla eu. In in mauris porta, pharetra risus lobortis, aliquet metus. Maecenas fermentum nulla sed orci volutpat placerat. Donec a ante eu leo molestie finibus. Sed convallis, nisi non ullamcorper ultrices, nisi sapien ultrices mauris, ut vestibulum magna lacus vitae ex.";

function App() {
  const refs = {
    // navbar: React.createRef<HTMLDivElement>(),
    hero: React.createRef<HTMLDivElement>(),
    perks: React.createRef<HTMLDivElement>(),
    tech: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
    about: React.createRef<HTMLDivElement>(),
  };

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
    for (const entry of Object.entries(refs)) {
      observer.observe(entry[1].current!);
    }
  }, []);

  return (
    <div className="max-w-[100vw]">
      {/* {lipsum} */}
      <Background />
      <Navbar />
      <Hero ref={refs.hero} />
      <Perks ref={refs.perks} />
      <Technologies ref={refs.tech} />
      <Projects ref={refs.projects} />
      <About ref={refs.about} />
    </div>
  );
}

export default App;
