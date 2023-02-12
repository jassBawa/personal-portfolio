import React from "react";
import { Button, IconButton } from "components";
import Project from "./Project";
import Heading from "./shared/Heading";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Airbnb Clone",
    badges: ["Nextjs", "Redux", "Tailwind Css"],
    image: "/airbnb.png",
    socials: {
      github: "https://github.com/jassBawa/airbnb-project",
      live: "https://airbnb-project-hazel.vercel.app/",
    },
  },
  {
    id: "2",
    title: "Amazone Clone",
    badges: ["Nextjs", "Next-Auth", "Stripe"],
    image: "/amazon.png",
    socials: {
      github: "https://github.com/jassBawa/amazone-clone-nextjs",
    },
  },
  {
    id: "3",
    title: "Food App",
    badges: ["React", "Context"],
    image: "/foodsapp.png",
    socials: {
      github: "https://github.com/jassBawa/foodapp",
    },
  },
];

type Props = {};

function Projects({}: Props) {
  return (
    <div className="max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto py-6 mt-10 ">
      <Heading>Recent Projects</Heading>
      <div className="projects grid grid-cols-1 lg:grid-cols-3 md:gap-4">
        {projects.map(({ title, id, image, badges, socials }) => (
          <Project
            key={id}
            title={title}
            image={image}
            badges={badges}
            socials={socials}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="https://github.com/jassBawa" target="_blank">
          <IconButton
            value="View More"
            icon={<BsGithub />}
            className="animate-bounce"
          />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
