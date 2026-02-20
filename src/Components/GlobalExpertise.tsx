import img1 from '../assets/svg/bluebadge.svg'
import img2 from '../assets/svg/bluezap.svg'
import img3 from '../assets/svg/blueworld.svg'
import img4 from '../assets/svg/share.svg'
import img5 from '../assets/svg/shield.svg'
import img6 from '../assets/svg/bluepeople.svg'
import img7 from '../assets/img/wavedown.png'
import Button from '../UI/Button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const GlobalExpertise = () => {
    const ref = useRef(null)
        const isInView = useInView(ref, {
        once: true,
        margin: "-120px"
    })
    
    const points = [
        {icon : img1, title: '19+ years of proven outsourcing delivery', id: 1},
        {icon : img2, title: 'AI-enhanced operations and emotionally trained teams', id: 2},
        {icon : img3, title: '24/7 multilingual support', id: 3},
        {icon : img4, title: 'Faster setup, flexible staffing, rapid scale', id: 4},
        {icon : img5, title: 'Onshore, nearshore, and offshore delivery models', id: 5},
        {icon : img6, title: 'U.S. presence with a strong offshore cost advantage', id: 6}
    ]
    return (
            <div className="bg-dark-blue pt-40 pb-28 w-full flex flex-col items-center relative overflow-clip">
                <div className="h-64 w-64 bg-[#1654bf] absolute bottom-[71%] right-[87%] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
                <div className="h-64 w-64 bg-[#1654bf] absolute top-[71%] left-[93%] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
                <h2 className="font-garamond italic text-2xl text-white">Global Expertise. Local Quality. Offshore Advantage.</h2>
                 <img src={img7} className="w-full absolute bottom-0" alt="wavydown"/>

                 <div className='flex flex-wrap justify-between items-center w-[65%] gap-y-6 mt-6'>
                    {points.map((point) => {
                        const fromLeft = [1, 5,].includes(point.id);
                        const third = point.id === 3
                        const forth = point.id === 4
                        return (
                        <motion.div
                        ref={ref}
                        key={point.title}
                        className='flex items-center w-100 bg-[#004bcc] py-3 pr-5 pl-3 gap-2 rounded-lg'
                        initial={{ x: fromLeft ? -100 : third ? 180 : forth ? -200 : 100, y: third ? 100 : forth ?100 : 0, opacity: 0}}
                        animate={isInView ? { x: 0, y: 0, opacity: 1} : {}}
                        viewport={{ once: true }}
                        transition={{
                                duration: 1.4,
                                ease: "easeOut"
                        }}
                        >
                            <div className='bg-white h-10 w-10 flex justify-center items-center rounded-lg'>
                                <img src={point.icon} alt={point.title} className='w-6' />
                            </div>
                            <p className="text-white text-base w-[73%] font-montserrat">{point.title}</p>
                        </motion.div>
                    )})}
                 </div>

                <Button variant='tertiary' showArrow={true} className='mt-12'>Work With Us</Button>
            </div>
    )
}

export default GlobalExpertise;