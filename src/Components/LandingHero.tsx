import Button from "../UI/Button"
import VideoPlayer from "./VideoUI";
import { useState, useEffect } from "react"
import { motion } from "framer-motion";


const LandingHero = () => {
    const phrases = [
        "Perfected by Emotion",
        "Shaped by Humans.",
        "Elevating Experiences.",
        "Crafted for Connection.",
    ];

    const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [phrases.length]);
    return ( 
       <div className="w-full flex flex-row justify-center items-center relative overflow-clip pt-16">
            <div className="bg-primary-purple w-125500px] rounded-full flex absolute bottom-[60%] right-[80%]"></div>
            <div className="bg-secondary-purple w-16 h-16 rounded-full flex absolute bottom-[15%] left-[10%]"></div>
            <div className="bg-secondary-purple w-16 h-16 rounded-full flex absolute bottom-[28%] left-[35%]"></div>
            <div className="bg-secondary-purple w-75 h-75 rounded-full flex absolute top-[70%] left-[85%]"></div>
            <div className="bg-secondary-purple w-16 h-16 rounded-full flex absolute top-[17%] right-[2%]"></div>
            <div className="bg-white/30 backdrop-blur-md w-full h-300 absolute z-20"></div>

            <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-between items-center pb-16 z-30 mb-24">
                <motion.div
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[90%] lg:w-1/2 flex flex-col items-start gap-8 pb-8 lg:pb-0"
                >

                    <h1 className="text-[19px] sm:text-2xl xl:text-xl flex items-center gap-0.5 font-extrabold font-garamond "><span className="font-garamond ">Powered by AI.</span>

                            <div className="h-10 overflow-hidden relative">
                            <div
                                className="transition-transform duration-500 ease-in-out"
                                style={{
                                transform: `translateY(-${index * 40}px)`,
                                }}
                            >
                                {phrases.map((text, i) => (
                                <div
                                    key={i}
                                    className="h-10 flex items-center text-orange-600 font-garamond"
                                >
                                    {text}
                                </div>
                                ))}
                            </div>
                            </div>
                        
                    </h1>


                    <p className="w-4/5 text-[11px] lg:text-[14px] font-montserrat ">Outcess delivers customer experiences that feel fast, human, and reliable.
                        We combine AI, analytics, and trained support teams to help brands improve retention, loyalty, and customer satisfaction.</p>
                    
                    <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4">
                        <Button variant="primary" showArrow={true} className="text-[10px] p-2 lg:text-xs" >Partner With Us</Button>
                        <Button variant="border" showArrow={true} className="text-[10px] p-2 lg:text-xs" >Explore Our Solutions</Button>
                    </div>
                </motion.div>
                
                <motion.div
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-87.5 sm:w-125 lg:w-125 flex justify-center items-center"
                >
                    <VideoPlayer src={'https://drive.google.com/file/d/1uQU_Kqozxhvd2AeUg6vE6qmjH2SyBgJ6/view'} width={500} />
                </motion.div>
            </div>

       </div> 
    )
}

export default LandingHero
