import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaGithub />,
    path: "https://github.com/AviralMehrotra",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/aviralmehrotra9/",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/AviralMehrotra9",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
