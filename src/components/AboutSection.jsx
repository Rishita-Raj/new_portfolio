// import React from 'react'
// import {useRef, useEffect} from 'react';
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';

// const AboutSection = () => {

//     const sectionRef = useRef(null);    
//     const titleRef = useRef(null);  
//     const introRef = useRef(null);  

//     useEffect(() => {

//         gsap.registerPlugin(ScrollTrigger);

//        gsap.fromTo(
//         titleRef.current,
//         {y: 80, opacity: 0},
//         {y:-200,
//              opacity:1, duration: 0.6,
//                 scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 50%",
//             toggleActions: "play none none reverse",
//         }}
//        )

//        //intro animation
//        gsap.fromTo(
//         introRef.current,   
//         {y: 80, opacity: 0, filter: "blur(10px)"},
//         {
//             y: -400,
//                 opacity: 1,
//                 filter: "blur(0px)",
//                 duration: 1.5,
//                 scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 40%",
//                 toggleActions: "play none none reverse",
//             }
//         }   
//         )
//     } ,[]);

//   return (
//     <section ref={sectionRef} className='h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]'>

//     <div className='container mx-auto px-4 h-full flex flex-col items-center justify-center'>
//         <h1 ref={titleRef} className='text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0'>
//         About Section
//         </h1>
//     </div>

//     <div ref={introRef} className='absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0'>
//         <h3 className='text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[43rem] max-w-[25rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-10rem]'>
//            Hi, I'm Rishita Raj, a Full Stack Developer with a strong passion for crafting seamless and user-focused web experiences. I specialize in building responsive, scalable, and high-performance applications using modern technologies like Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS. <br/>
// Beyond web development, I have a solid foundation in Data Structures & Algorithms, which helps me write optimized and efficient code, and a growing interest in Machine Learning, exploring how intelligent systems can enhance user experiences.<br/>
// I love turning ideas into real, functional products — blending clean design, technical precision, and creative thinking to deliver impactful digital solutions.
//         </h3>

//         <img className='lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten'
//         src="/images/pic1.jpg" alt="profile pic" />
//     </div>

//     </section>
//   )
// }

// export default AboutSection






import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation — enters gently and stays visible
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none none", // stays visible
        },
      }
    );

    // Text + image animation — smooth slide-up with no fade-out
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          scrub: false, // prevents continuous movement
          toggleActions: "play none none none", // stays visible
        },
      }
    )

    // stars animation 
    starsRef.current.forEach((star, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        const speed = 0.5 + Math.random() * 0.5


        gsap.to(star, { 
           x: `${direction * (100 + index * 20)}`,
              y: `${direction * -50 - index * 10}`,
              rotation: direction * 360,
              ease: "none",
              scrollTrigger:{
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: speed,    
              }
            })

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => {
                    if (trigger.vars.trigger === sectionRef.current) {
                        trigger.kill();
                    }
                });
            }
        })
  });

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }}

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black to-[#9a74cf50] flex flex-col justify-center items-center py-16"
    >

    <div className="absolute inset-0 overflow-hidden">
        {/* {stars} */}
        {[...Array(15)].map((_, i) => (
            <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
                width: `${10 + i * 3}px`,
                height: `${10 + i * 3}px`,
                backgroundColor: "white",
                opacity: 0.2 + Math.random() * 0.4,
                top: `${ Math.random() * 100}%`,
                left: `${ Math.random() * 100}%`
            }}
            />
        ))}

    </div>

      {/* Heading */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 tracking-wide"
        >
          About Me
        </h1>
      </div>

      {/* Text + Image Container */}
      <div
        ref={introRef}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 gap-10 opacity-0"
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 text-purple-100 text-justify leading-relaxed">
          <p className="text-base md:text-lg font-medium tracking-wide">
            Hi, I'm <span className="text-purple-300 font-semibold">Rishita Raj</span>, a{" "}
            <span className="text-purple-300 font-semibold">Full Stack Developer</span>{" "}
            with a strong passion for crafting seamless and user-focused web experiences.
            I specialize in building responsive, scalable, and high-performance applications
            using modern technologies like{" "}
            <span className="text-purple-300 font-semibold">
              Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS
            </span>.
          </p>
          <br />
          <p className="text-base md:text-lg font-medium tracking-wide">
            Beyond web development, I have a solid foundation in{" "}
            <span className="text-purple-300 font-semibold">
              Data Structures & Algorithms
            </span>, which helps me write optimized and efficient code, and a growing
            interest in{" "}
            <span className="text-purple-300 font-semibold">Machine Learning</span>,
            exploring how intelligent systems can enhance user experiences.
          </p>
          <br />
          <p className="text-base md:text-lg font-medium tracking-wide">
            I love turning ideas into real, functional products — blending clean design,
            technical precision, and creative thinking to deliver impactful digital solutions.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/pic1.jpg"
            alt="Rishita Raj"
            className="h-[18rem] md:h-[26rem] lg:h-[28rem] object-contain rounded-2xl mix-blend-lighten shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
