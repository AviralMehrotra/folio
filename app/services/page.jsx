"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    href: "",
  },
  {
    id: "02",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    href: "",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    href: "",
  },
  {
    id: "04",
    title: "SEO",
    description:
      "Search engine optimization to improve your website's visibility and organic traffic.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-15 px-4"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ease-in-out">
                    {service.id}
                  </div>
                  <Link
                    href={service.href || "#"}
                    className="w-17.5 h-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-10.5 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
