import Head from "next/head";
import { AboutMe, Header, LargeCard, Projects } from "@/components/";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jass Bawa | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jass is a React developer with 1.5 years of experience in building web applications."
        />

        <meta
          name="keywords"
          content="React, JavaScript, web development, frontend, developer, 1.5 years of experience"
        />

        <meta name="author" content="Jass" />
      </Head>
      <div className="bg-[#FBFEFD] dark:bg-gray-900 h-screen scroll-smooth overflow-scroll z-0">
        <Header />
        <main>
          <div id="hero" className="">
            <LargeCard />
          </div>
          <div id="projects" className="">
            <Projects />
          </div>
          <div id="about" className="">
            <AboutMe />
          </div>
          <div id="contact" className="">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
