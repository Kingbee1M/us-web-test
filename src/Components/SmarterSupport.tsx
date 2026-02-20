import img1 from '../assets/img/headphones.png'
import img2 from '../assets/img/doc.png'
import img3 from '../assets/img/cart.png'
import Button from '../UI/Button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SmarterSupport = () => {

    const ref = useRef(null)
        const isInView = useInView(ref, {
        once: true,
        margin: "-120px"
    })

     const options = [
            {title: 'Customer Engagement Solutions', desc: ['AI-assisted voice, chat, email & social support.', 'Real-time sentiment analysis.', 'Faster resolution with trained empathy-based agents.', 'Proven improvement in CSAT and response time.'], pic: img1, color: '#0046be30'},
            {title: 'Business Process Outsourcing', desc: ['Back-office and middle-office operations.', 'Workflow automation for speed and accuracy.', 'Data processing, verification, KYC, onboarding.', 'Up to 50% process cost reduction.'], pic: img2, color: '#f0421430'},
            {title: 'Industry-Specific Outsourcing', desc: ['Tailored CX & BPO for Ecommerce, Fintech, HealthTech, Telecom, Travel, and more.', 'Trained teams with domain knowledge.', 'Compliance-ready operations.', 'Flexible scaling for peak seasons.'], pic: img3, color: '#4caf5030'},
        ]
    return (
        <div className="w-full flex flex-col items-center mt-32 bg-white text-text-color gap-3">
            
            <motion.div
            ref={ref}
            initial={ {y: -220, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="full flex flex-col items-center gap-8"
            >
                <h2 className="text-blue-shade text-2xl sm:text-3xl lg:text-4xl font-garamond">Smarter Support. Better Outcomes.</h2>
                <p className="font-montserrat w-[47%] text-center text-sm">Our solutions improve customer experience, streamline operations, and reduce cost powered by AI, delivered by experienced people</p>
            </motion.div>
            
            
            <motion.div
            ref={ref}
            initial= {{y: 130, opacity: 0}}
            animate={isInView ? {y: 0, opacity: 1} : {}}
            transition={{duration: 1.2, ease: 'easeOut', delay: 0.2}}
            className='flex flex-row flex-wrap justify-center items-start gap-6 w-4/5 mt-16 mb-24'>
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-8 w-[300px] h-[400px] rounded-lg" style={{border: `3px solid ${option.color}`}}>
                            <img src={option.pic} alt={option.title} className="w-12 h-12" />
                        <div className="flex flex-col justify-center items-center w-full">
                            <h3 className="text-[18] font-demibold text-center">{option.title}</h3>
                            <ul className="list-disc pl-4 mt-2 flex flex-col w-4/5 gap-2">
                                {option.desc.map((item, i) => (
                                    <li key={i} className="text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </motion.div>

                <Button variant='primary' showArrow={true}>Explore all services</Button>
        </div>
    )
}

export default SmarterSupport