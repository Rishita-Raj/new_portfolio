import React, { use } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from "framer-motion/client";
import { FaShareAlt } from "react-icons/fa"; // Font Awesome

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
    const horizontalRef = useRef(null);

  // project image data
  const projectImages = [
    {
      id: 1,
      title: "Signalist — Real-Time Stock Tracker Web App",
      imageSrc: "/images/project5.jpg",
      link: "https://signalist-stock-tracker-app-lilac.vercel.app/sign-in",
    },
    {
      id: 2,
      title: "3D - Portfolio Website",
      imageSrc: "/images/project1.jpg",
      link: "https://rish-portfolio-three.vercel.app/",
    },
    {
      id: 3,
      title: "Nexus 3.0 — College Tech Club official Website",
      imageSrc: "/images/project2.jpg",
      link: "https://nexusiete2-0.vercel.app/",
    },
    {
      id: 4,
      title: "QuickBlog — A Modern AI Blogging Platform",
      imageSrc: "/images/project4.jpg",
      link: "https://quick-blog-client-cyan.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "AI Chatbox- platform",
    //   imageSrc: "/images/project6.jpg",
    //   link: "https://quick-blog-client-cyan.vercel.app/",
    // },
   
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //title reveal animation
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // title line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        y:50,
        rotationX: 10,
         opacity: 0 
        },
      {
        y:0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay:0.2,
        scrollTrigger: {
          trigger: sectionRef.current,  
            start: "top 70%",   
            toggleActions: "play none none none",
        },

     },
        
    );

    //parallex horizontal scroll effect
    gsap.fromTo(
        sectionRef.current,
        {
            backgroundPosition: "50% 0%"
        },
        {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",   
                end: "bottom top",
                scrub: true,
                // pin: true,
            }
        }
    )

    //horizontal scroll animation
    const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projectImages.length - 1),

        ease: "none",
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${horizontalRef.current.offsetWidth}`,
            scrub: true,
            pin: true,
            snap:{
                snapTo: 1 / (projectImages.length -1),
                duration: {min:0.2, max:0.3},
                delay:0.1,
            },
            invalidateOnRefresh: true,
        }
    })

    //iamge hover effect
    //animate each image panel
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const imageTitle = panel.querySelector(".project-title");

        //craete a timeline for each panel
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left right",
            end: "right left",
            scrub: true,
            },
        });

        // iamge scale and opacity on hover
        tl.fromTo(image,
        {scale: 0, rotate: -20,},
        {scale:1, rotate: 1, duration:0.5,},     
        );

        //title animation
        if(imageTitle){
            tl.fromTo(imageTitle,
                {y: 30,},
                {y: -90,duration:0.3,},0.2)
        }

    })
    

  }, [projectImages.length]);


  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      {/* section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>

        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      {/*  horizontal scroll area */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="horizontal-section flex md:w-[400%] w-[420%]">
          {projectImages.map((project) => (
            <div
              Loading
              key={project.id}
              className="panel relative flex items-center justify-center"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt="Project-img"
                />

                {/* <h2 className='project-title flex items-center gap-3 md:text-3xl text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer '>
                            {project.title} <FaShareAlt size={24} color="#555" />
                        </h2> */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title flex items-center gap-3 md:text-3xl text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                >
                  {project.title} <FaShareAlt size={24} color="#555" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
