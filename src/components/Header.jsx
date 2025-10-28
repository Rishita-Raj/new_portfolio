// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // State to track if the contact form is open
//   const [contactFormOpen, setContactFormOpen] = useState(false);
//   const openContactForm = () => setContactFormOpen(true);
//   const closeContactForm = () => setContactFormOpen(false);

//   return (
//     <header className="absolute w-full z-50 transition-all duration-300">
//        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
//         {/* Logo Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 25,
//             delay: 0.3,
//             duration: 1.2,
//           }}
//           className="flex items-center"
//         >
//           <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
//             R
//           </div>
//           <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
//             Rishita Raj
//           </span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="lg:flex hidden space-x-8">
//           {["Home", "About", "Projects", "Experience", "Profiles", "Contact"].map(
//             (item, index) => (
//               <motion.a
//                 key={item}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 20,
//                   delay: 0.7 + index * 0.1,
//                 }}
//                 className="relative text-gray-800 hover:text-violet-600 dark:text-gray-200 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
//                 href="#"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
//               </motion.a>
//             )
//           )}
//         </nav>

//         {/* Social Section */}
//         <div className="md:flex hidden items-center space-x-4">
//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.3, duration: 0.8 }}
//             className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
//             href="https://github.com/Rishita-Raj"
//           >
//             <FiGithub className="w-5 h-5" />
//           </motion.a>

//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.3, duration: 0.8 }}
//             className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
//             href="https://www.linkedin.com/in/rishita-raj-836b13290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//           >
//             <FiLinkedin className="w-5 h-5" />
//           </motion.a>

//           {/* Hire Me Button */}
//           <motion.button
//             onClick={openContactForm}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               delay: 1.6,
//               duration: 0.8,
//               type: "spring",
//               stiffness: 100,
//               damping: 15,
//             }}
//             className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
//           >
//             Hire Me
//           </motion.button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//           <motion.button
//             whileTap={{ scale: 0.7 }}
//             onClick={toggleMenu}
//             className="text-gray-700"
//           >
//             {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{
//           opacity: isOpen ? 1 : 0,
//           height: isOpen ? "auto" : 0,
//         }}
//         transition={{ duration: 0.5 }}
//         className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
//       >
//         <nav className="flex flex-col space-y-3">
//           {["Home", "About", "Projects", "Experience", "Profiles", "Contact"].map(
//             (item) => (
//               <a
//                 onClick={toggleMenu}
//                 className="text-gray-800 dark:text-gray-200 font-medium py-2"
//                 key={item}
//                 href="#"
//               >
//                 {item}
//               </a>
//             )
//           )}
//         </nav>

//         <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//           <div className="flex space-x-5">
//             <a href="https://github.com/Rishita-Raj">
//               <FiGithub className="h-5 w-5 text-gray-300" />
//             </a>
//             <a href="https://www.linkedin.com/in/rishita-raj-836b13290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//               <FiLinkedin className="h-5 w-5 text-gray-300" />
//             </a>
//           </div>

//           <button
//             onClick={() => {
//               toggleMenu();
//               openContactForm();
//             }}
//             className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-400 to-violet-400 font-bold text-white"
//           >
//             Contact Me
//           </button>
//         </div>
//       </motion.div>

//       {/* Contact Form */}
//       <AnimatePresence>
//         {contactFormOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 30 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 200,
//                 duration: 0.8,
//               }}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
//                 <button onClick={closeContactForm}>
//                   <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
//                 </button>
//               </div>

//               {/* Input Fields */}
//               <form className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-300 mb-1"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-300 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Your Email"
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-300 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     rows="4"
//                     id="message"
//                     placeholder="How can I help you?"
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white font-semibold"
//                 >
//                   Send Message
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;



import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from '@emailjs/browser';

const Header = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

   
     // ✅ Email sending logic (fixed)
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_17c1gin";
    const templateId = "template_mp5dnaf";
    const publicKey = "UFywwNYxX8Qv7K0e9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rishita Raj",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  };
     



  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // Smooth scroll behavior
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset for fixed header
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = ["Home", "About", "Projects", "Experience", "Profiles", "Contact"];

  return (
    <>
      {/* ✅ HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12 md:h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
              R
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Rishita Raj
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.1,
                }}
                className={`relative font-medium transition-colors duration-300 group ${
                  activeSection === item
                    ? "text-violet-400"
                    : "text-gray-200 hover:text-violet-400"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-violet-600 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>
            ))}
          </nav>

          {/* Social + Hire Me */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              href="https://github.com/Rishita-Raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              href="https://www.linkedin.com/in/rishita-raj-836b13290"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-gray-200"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-black/90 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className={`py-2 font-medium ${
                  activeSection === item
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-violet-400"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-700">
            <div className="flex space-x-5">
              <a href="https://github.com/Rishita-Raj" target="_blank" rel="noopener noreferrer">
                <FiGithub className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishita-raj-836b13290"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="h-5 w-5 text-gray-300" />
              </a>
            </div>

            <button
              onClick={() => {
                toggleMenu();
                openContactForm();
              }}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-violet-400 font-bold text-white"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </header>

      {/* ✅ CONTACT FORM MODAL */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 200, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 emailForm">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="How can I help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
