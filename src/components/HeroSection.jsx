import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className='h-screen flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden'>

    {/* left elemenet */}
        <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1 
            initial={{opacity: 0, y: 80}}
            animate={{opacity: 1, y: 0}}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                duration: 1.5, 
                delay: 1.3}}
            className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 mb-6">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-red-500">Ideas</span> <br/> into fully functional <br/> digital realities.
            </motion.h1>

            <motion.p 
            initial={{opacity: 0, y: 80}}
            animate={{opacity: 1, y: 0}}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                duration: 1.8, 
                delay: 1.3}}
            className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl ">
                A Software Developer committed to developing robust and maintainable software that addresses real-world challenges with practical, user-centric solutions.
            </motion.p>
        </div>


        {/* right section */}
        <Spline className="absolute xl:right-[-29%] xl:bottom-[10%]"
        scene="https://prod.spline.design/ZCx2n0MnHKi5rCKm/scene.splinecode" />
 


    </section>

  )
}

export default HeroSection


