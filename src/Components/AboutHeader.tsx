import Button from "../UI/Button";
import VideoPlayer from "./VideoUI"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

    const heroData =[
        "At Outcess US, we believe the most powerful connections in business are built at the intersection of technology and empathy. We are a customer experience and business process outsourcing (BPO) company helping brands grow through intelligent, emotionally attuned interactions. By combining AI automation, data-driven insights, and human understanding, we empower organizations to create meaningful relationships with their customers — at scale.",
        "With over 19 years of global outsourcing experience, Outcess has evolved from its African roots into a global player with a US presence and delivery centers across Africa. Our mission is simple: to help brands scale smarter, connect deeper, and operate more efficiently through intelligent outsourcing."
    ]

const AboutHeader = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 10000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const cardVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };


    return (
        <header className="w-full flex flex-col items-center gap-8 mt-5">
            <h1 className="w-[70%]  text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-garamond font-bold text-center">Blending Artificial Intelligence With Emotional Intelligence To Power Human-Centered Experiences</h1>
            <div className="relative w-full max-w-xl h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded w-full"
          >
            {heroData[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {heroData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-primary-orange" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

            <Button variant="primary">Partner With Outcess US</Button>
            
            <div className="lg:w-225 md:w-175 sm:w-137.5 w-112.5 flex justify-center items-center">
                <VideoPlayer width={1000} src={'https://drive.google.com/file/d/1uQU_Kqozxhvd2AeUg6vE6qmjH2SyBgJ6/view'} />
            </div>
        </header>
    )
}

export default AboutHeader