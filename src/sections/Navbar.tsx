import React, { useEffect, useState } from "react";
import { getImageUrl } from "../utils/getImageUrl";

const navLink = [
  {
    name: "Home",
    link: "#home",
    icon: "home.svg",
  },
  {
    name: "About",
    link: "#about",
    icon: "about.svg",
  },
  {
    name: "Projects",
    link: "#projects",
    icon: "folder.svg",
  },
  {
    name: "Resume",
    link: "#resume",
    icon: "resume.svg",
  },
];
const Navigation = () => {
  return (
    <nav className="desktop">
      <ul>
        {navLink.map(({ name, link, icon }) => (
          <li key={name} className="group">
            <a href={link}>
              <span className="flex gap-1.5">
                <img src={getImageUrl(icon)} width={20} />
                {name}
              </span>
              <span className="underline" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <span className="">
          <a href="" className="logo">
            Manh Huy | Nguyen
          </a>
        </span>
        <Navigation />
        <a className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
    </header>
  );
};

export default Navbar;
