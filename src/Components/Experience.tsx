

import img1 from '../assets/img/brain.png'
import img2 from '../assets/img/heart.png'
import img3 from '../assets/img/purpzap.png'
import img4 from '../assets/img/target.png'
import img5 from '../assets/svg/waveup.svg'
import img6 from '../assets/img/wavedown.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import Button from '../UI/Button'

const Experience = () => {
    const ref = useRef(null)
        const isInView = useInView(ref, {
        once: true,
        margin: "-10px"
    })

    const infos = [
        {title: 'AI-Powered Insights', desc: "Real-time data and predictive analytics guide every decision", pic: img1, color: '#0046be14'},
        {title: 'Emotional Intelligence', desc: "Trained agents who understand and respond to customer emotions", pic: img2, color: '#f0421714'},
        {title: 'Instant Resolution', desc: "Technology and humanity working in perfect harmony", pic: img3, color: '#9c27b014'},
        {title: 'Precision Targeting', desc: "Every interaction tailored to individual customer needs", pic: img4, color: '#00bcd414'},
    ]
    return (
        <section className="flex flex-col items-center w-full bg-white relative">
            <img src={img5} className="w-full" alt="wavyup"/>


            <div className='bg-pink flex flex-col items-center pt-9 pb-12 lg:pb-32 font-montserrat'>
                
                <motion.header ref={ref} initial={ {y: -220, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="full flex flex-col items-center gap-8 mb-">
                    <h2 className='w-2/3 lg:w-auto text-center font-bold font-garamond text-heading-color text-2xl lg:text-4xl'>Experience Designed With Insight + Empathy</h2>
                    <p className='text-center text-text-color text-sm lg:text-base'>
                        We don&apos;t just manage tasks, we manage relationships.<br />
                        Our agents are trained to read tone, understand emotion, and respond with clarity. AI tools provide real-time <br />
                        guidance, helping them resolve issues faster and with a human touch.
                        Every interaction becomes an opportunity to retain a customer.<br />
                    </p>
                </motion.header>

                <div className='flex flex-wrap justify-center lg:justify-end items-center w-[90%] lg:w-[70%] gap-y-6 mt-16 ml-0 lg:ml-24'>
                    {infos.map((info, index) => {
                            const fromLeft = index % 2 === 0;

                            return (
                            <motion.div
                            ref={ref}
                                key={index}
                                initial={{
                                x: fromLeft ? -80 : 80,
                                opacity: 0
                                }}
                                animate={isInView ? {
                                x: 0,
                                opacity: 1
                                } : {}}
                                transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                                }}
                                className='w-75 lg:w-2/4 flex items-center gap-3'
                            >
                            <div className='w-20 lg:w-12 h-12 lg:h-12 rounded-lg flex justify-center items-center flex-none' style={{backgroundColor:info.color}}> 
                                <img src={info.pic} alt={info.title} className="w-7 lg:w-6" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h3 className='font-[422] lg:text-base text-heading-color'>{info.title}</h3>
                                <p className='text-[12px] lg:text-sm text-text-color'>{info.desc}</p>
                            </div>
                        </motion.div>
                    )})}
                </div>

                <motion.div
                initial={{y: 100, opacity: 0}}
                animate={isInView ? {y: 0, opacity: 1} : {}}
                transition={{duration:1, ease: 'easeOut', delay: 0.5}}
                >
                    <Button variant='primary' showArrow={true} className='mt-20'>See Our Impact</Button>
                </motion.div>

            </div>


            <img src={img6} className="w-full absolute bottom-0" alt="wavydown"/>
        </section>
    )
}

export default Experience;