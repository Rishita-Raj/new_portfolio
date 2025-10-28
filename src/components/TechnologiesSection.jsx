
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // ✅ Correct import for VS Code icon

const TechnologiesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cards animation
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const techCategories = [
    {
      title: "Programming Languages",
      items: [
        { name: "C", icon: <SiC size={40} color="#00599C" /> },
        { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
        { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
        { name: "Java", icon: <FaJava size={40} color="#E76F00" /> },
        { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
        { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
        { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
      ],
    },
    {
      title: "Technologies",
      items: [
        { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
        { name: "Node.js", icon: <FaNodeJs size={40} color="#5FA04E" /> },
        { name: "TensorFlow", icon: <SiTensorflow size={40} color="#FF6F00" /> },
        { name: "PyTorch", icon: <SiPytorch size={40} color="#EE4C2C" /> },
        { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
      ],
    },
    {
      title: "Developer Tools",
      items: [
        { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub size={40} color="#171515" /> },
        { name: "VS Code", icon: <VscVscode size={40} color="#007ACC" /> },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#907fa850] flex flex-col items-center justify-center py-20"
    >
      {/* Heading */}
       <div
        ref={titleRef}
        className="container mx-auto px-6 h-full flex flex-col items-center justify-center text-center space-y-3"
      >
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
          Programming Languages
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold text-purple-200 tracking-wide">
          Technologies
        </h2>

        {/* <h3 className="text-lg md:text-5xl font-medium text-gray-300 italic mb-20">
          & Developer Tools 
        </h3>
        <hr className="w-32 border-t-2 border-white mb-50" /> */}
        
       
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col space-y-20">
        {techCategories.map((category, index) => (
          <div key={index} className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center px-8">
              {category.items.map((tech, idx) => (
                <div
                  key={idx}
                  ref={(el) => cardsRef.current.push(el)}
                  className="group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-white w-48 h-48 opacity-0 relative overflow-hidden"
                >
                  {/* Icon */}
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-md font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {tech.name}
                  </h3>

                  {/* Underline pop-up effect */}
                  <div className="absolute bottom-6 w-0 group-hover:w-12 h-[3px] bg-purple-400 transition-all duration-300 rounded-full group-hover:animate-pop"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pop animation */}
      <style jsx>{`
        @keyframes pop {
          0% {
            transform: scaleX(0.4) translateY(6px);
            opacity: 0;
          }
          50% {
            transform: scaleX(1.2) translateY(-2px);
            opacity: 1;
          }
          100% {
            transform: scaleX(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-pop {
          animation: pop 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
