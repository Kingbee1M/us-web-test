import Button from "../UI/Button"
import img1 from '../assets/img/people.png'
import img2 from '../assets/img/internet.png'
import img3 from '../assets/img/zap.png'
import img4 from '../assets/img/chat.png'
import img5 from '../assets/img/clock.png'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const PeopleConnect = () => {
    const ref = useRef(null)
        const isInView = useInView(ref, {
        once: true,
        margin: "-120px"
    })


    const blocks = [
        {title: '19+ years', desc: "Delivering global CX and BPO", pic: img1, color: '#DDE4F0'},
        {title: '3,000+ & 4,000+', desc: "CRM seats and contact center seats deployed respectively", pic: img2, color: '#F3E5F5'},
        {title: 'Up to 60%', desc: "Offshore cost advantage", pic: img3, color: '#FFF5CF'},
        {title: '21M+ interactions', desc: "Handled yearly", pic: img4, color: '#FFF5CF'},
        {title: '24/7 global delivery', desc: "Across multiple time zones", pic: img5, color: '#DDE4F0'},
    ]
    return (
        <section className="w-full relative flex flex-col justify-center items-center text-text-color bg-bot-comp-bg overflow-x-hidden">
            {/* <div className=" w-full h-[250px] bg-red-500 -top-[20%] left-0 z-[200] absolute rounded-[50%_50%_0_0]"></div> */}
            <div className="w-full z-50 bg-bot-comp-bg flex flex-col items-center mb-28">
                
                <motion.header
                ref={ref}
                initial={{ y: -120, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="w-full"
                >
                    <svg viewBox="0 0 700 200" className="text-center">
                        <defs>
                        <path
                            id="curve"
                            d="M 20 320 A 330 200 0 0 1 680 320"
                            fill="transparent"
                        />
                        </defs>
                        <text fill="#000" fontSize="24" fontFamily="'Cormorant Garamond', serif word-spacing= '24">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle" className="font-garamond text-4xl ">
                            Where <tspan fill="#ff6600" className="font-garamond text-4xl ">AI</tspan> works. <tspan fill="#0046be" className="font-garamond text-4xl ">People</tspan> Connect
                        </textPath>
                        </text>
                    </svg>
                </motion.header>

                <motion.div
                ref={ref}
                initial={{ x: 120, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="w-full flex flex-col items-center mt-6"
                >
                    <p className="w-2/3 text-sm lg:text-[16px] text-text-color font-demibold text-center mb-10 font-montserrat leading-6">Automation speeds things up. Empathy makes customers stay.<br />
                    Outcess US blends intelligent automation with emotionally trained support teams to create <br /> 
                    customer interactions that are accurate, responsive, and genuinely human.<br />
                    We utilize AI, analytics, and in-depth industry expertise to help brands understand their <br /> 
                    customers and deliver faster resolutions at lower operational costs.
                    </p>

                    <Button variant="secondary" >Discover How We Work</Button>
                </motion.div>

            </div>

            <div className="flex flex-row flex-wrap gap-12 w-4/5 justify-center pb-5">
                {blocks.map((block, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-70 h-32" style={{ backgroundColor: block.color }}>
                        <div className="bg-white w-12 h-12 rounded-xl flex justify-center items-center">
                           <img src={block.pic} alt={block.title} className="w-8 h-8" /> 
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center font-montserrat">{block.title}</h3>
                            <p className="text-[10px] text-center font-montserrat">{block.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PeopleConnect