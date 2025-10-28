// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

// const Profiles = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Title animation
//     gsap.fromTo(
//       titleRef.current,
//       { y: 60, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Cards stagger animation
//     gsap.fromTo(
//       cardsRef.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   const profiles = [
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedin size={40} color="#0A66C2" />,
//       link: "https://www.linkedin.com/in/rishita-raj-836b13290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     },
//     {
//       name: "GitHub",
//       icon: <FaGithub size={40} color="#171515" />,
//       link: "https://github.com/Rishita-Raj",
//     },
//     {
//       name: "LeetCode",
//       icon: <SiLeetcode size={40} color="#FFA116" />,
//       link: "https://leetcode.com/u/Rishita_Raj18/",
//     },
//     {
//       name: "Codeforces",
//       icon: <SiCodeforces size={40} color="#1F8ACB" />,
//       link: "https://codeforces.com/profile/rishitaraj1855.",
//     },
//     {
//       name: "CodeChef",
//       icon: <SiCodechef size={40} color="#5B4638" />,
//       link: "https://www.codechef.com/users/rishitaraj1855",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#907fa850] flex flex-col items-center justify-center py-16"
//     >
//       {/* Heading */}
//       <div className="container mx-auto px-4 text-center mb-16">
//         <h1
//           ref={titleRef}
//           className="text-4xl md:text-5xl font-extrabold text-white mb-4 opacity-0"
//         >
//           Profiles
//         </h1>
//         <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
//       </div>

//       {/* Profile Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
//         {profiles.map((profile, index) => (
//           <a
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             href={profile.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-white w-52 h-52 opacity-0"
//           >
//             <div className="mb-4">{profile.icon}</div>
//             <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
//               {profile.name}
//             </h3>
//             <div className="mt-2 w-0 group-hover:w-12 h-[3px] bg-purple-400 transition-all duration-300 rounded-full"></div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Profiles;


import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const Profiles = () => {
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

    // Cards stagger animation
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const profiles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={40} color="#0A66C2" />,
      link: "https://www.linkedin.com/in/rishita-raj-836b13290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} color="#171515" />,
      link: "https://github.com/Rishita-Raj",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={40} color="#FFA116" />,
    //   link: "https://leetcode.com/u/Rishita_Raj18/",
      link: "https://leetcode.com/problemset/",
      
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces size={40} color="#1F8ACB" />,
      link: "https://codeforces.com/profile/rishitaraj1855.",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={40} color="#5B4638" />,
      link: "https://www.codechef.com/users/rishitaraj1855",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#907fa850] flex flex-col items-center justify-center py-16"
    >
      {/* Heading */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 opacity-0"
        >
          Profiles
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
        {profiles.map((profile, index) => (
          <a
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-white w-52 h-52 opacity-0 relative overflow-hidden"
          >
            {/* Icon with hover scale */}
            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
              {profile.icon}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              {profile.name}
            </h3>

            {/* Pop-up underline animation */}
            <div className="absolute bottom-6 w-0 group-hover:w-12 h-[3px] bg-purple-400 transition-all duration-300 rounded-full group-hover:animate-pop"></div>
          </a>
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

export default Profiles;
