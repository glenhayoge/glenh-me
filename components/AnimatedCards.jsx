"use client";
import React from "react";
import Link from "next/link";
import {
  FaStackOverflow,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaCog,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AnimatedCards() {

  const handleMouseMove = (e) => {
    const cards = Array.from(document.querySelectorAll(".card"));
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div
      id="cards"
      className=" px-5 flex flex-wrap gap-4 mb-12"
      onMouseMove={handleMouseMove}
    >
      {[
        {
          platform: "LinkedIn",
          link: "https://www.linkedin.com/in/glen-g-hayoge-089935104/",
          description: "Here's the corrected section of your code",
          icon: FaLinkedin ? (
            <FaLinkedin className="text-gray-100 mt-1 mr-1.5 text-3xl" />
          ) : (
            <div>LinkedIn</div>
          ),
          color: "from-pink-500",
        },
        {
          platform: "GitHub",
          link: "https://github.com/glenhayoge",
          description: "Here's the corrected section of your code",
          icon: FaGithub ? (
            <FaGithub className="text-gray-100 mt-1 mr-1.5 text-3xl" />
          ) : (
            <div>GitHub</div>
          ),
          color: "from-gray-500",
        },
        {
          platform: "StackOverFlow",
          link: "https://stackoverflow.com/users/12071488/glenh",
          description: "Here's the corrected section of your code",
          icon: MdEmail ? (
            <FaStackOverflow className="text-gray-100 mt-1 mr-1.5 text-3xl" />
          ) : (
            <div>Email</div>
          ),
          color: "from-blue-600",
        },
        {
          platform: "gghayoge at gmail.com",
          link: "mailto:gghayoge@gmail.com",
          description: "Here's the corrected section of your code",
          icon: MdEmail ? (
            <MdEmail className="text-gray-100 mt-1 mr-1.5 text-3xl" />
          ) : (
            <div>Email</div>
          ),
          color: "from-blue-600",
        },     
      ].map((item, idx) => (
        <div
          key={idx}
          className={`card min-w-[120px] h-[120px] flex-1 bg-white/10 rounded-lg relative group`}
          style={{
            "--color":
              idx === 0
                ? "60 100% 50%"
                : idx === 1
                ? "0 0% 100%"
                : idx === 2
                ? "0 0% 100%"
                : 
                "180 100% 50%",
          }}
        >
          <Link href={item.link} target="_blank" rel="noopener noreferrer" className="z-10">
            <div className="card-content inset-1 dark:bg-[#131315] bg-cyan-600 rounded-lg absolute flex flex-col items-center justify-center gap-4 p-2">
              {item.icon}
              {/* <p className="text-xs text-center">{item.description}</p> */}
              <div className="text-gray-100 dark:text-white/50 text-xs z-10 ">
                {item.platform}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
