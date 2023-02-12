import React from "react";
import Project from "./Project";
import Heading from "./shared/Heading";

const projects = [
  {
    id: "1",
    title: "E-commerce",
    skills: ["React", "Typescript"],
    image: "/project-image.png",
    socials: {
      github: "https://www.github.com",
      live: "https://www.vercel.com",
    },
  },
  {
    id: "2",
    title: "Airbnb Clone",
    skills: ["Nextjs", "Redux"],
    image: "/project-image.png",
    socials: {
      github: "https://www.github.com",
      live: "https://www.vercel.com",
    },
  },
  {
    id: "3",
    title: "Amazone Clone",
    skills: ["React", "Rest Api"],
    image: "/project-image.png",
    socials: {
      github: "https://www.github.com",
      live: "https://www.vercel.com",
    },
  },
];

type Props = {};

function Projects({}: Props) {
  return (
    <div className="max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto py-6 mt-6 ">
      <Heading>Recent Projects</Heading>
      <div className="projects grid grid-cols-1 lg:grid-cols-3 md:gap-4">
        {projects.map(({ title, id, image, skills, socials }) => (
          <Project
            key={id}
            title={title}
            image={image}
            skills={skills}
            socials={socials}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
