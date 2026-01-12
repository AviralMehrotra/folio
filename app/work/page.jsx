"use client";

import { motion } from "motion/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Tasker",
    description:
      "Feature-rich project management web application with task organization, priority tags, due dates, status tracking, and real-time dashboard insights. Fully responsive design with secure JWT authentication.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/tasker.png",
    live: "https://tasker-pm.vercel.app/",
    github: "https://github.com/AviralMehrotra/Tasker",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Stannum",
    description:
      "E-Commerce platform with comprehensive shopping features, product management, and seamless user experience built with modern web technologies.",
    stack: [
      { name: "React.js" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/stannum.png",
    live: "https://stannum.vercel.app/",
    github: "https://github.com/AviralMehrotra/Stannum",
  },
  {
    num: "03",
    category: "fullstack",
    title: "ComicVault",
    description:
      "Responsive comic book collection tracker with real-time tracking, issue-level progress monitoring, GitHub-inspired activity heatmaps, and personalized reading analytics for 1000+ series from ComicVine API.",
    stack: [
      { name: "React.js" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Supabase" },
    ],
    image: "/assets/work/comicvault.png",
    live: "https://comicvault-cyan.vercel.app/",
    github: "https://github.com/AviralMehrotra/ComicVault",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h4 className="text-xl text-accent capitalize -my-5">
                {project.category} project
              </h4>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[280px] sm:h-[360px] xl:h-[460px] relative group flex justify-center items-center">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover xl:object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
