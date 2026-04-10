import UseOnceinView from '../hooks/useOnceInView'
import { motion } from "framer-motion";

const BusinessesChoose = () => {
    const { ref, isInView } = UseOnceinView();
    const choices = [
        {id: 1,title: 'Human + AI Synergy', desc: 'Emotional intelligence backed by machine learning.', bg: '#dde4f0', border: '#8db3f4'},
        {id: 2,title: 'Proven Expertise', desc: ' 19+ years of BPO excellence.', bg: '#f3e5f5', border: '#eeb48e'},
        {id: 3,title: 'Scalable Delivery Models', desc: 'Onshore, nearshore, and offshore flexibility.', bg: '#f3e5f5', border: '#eeb48e'},
        {id: 4,title: 'Outcome-Driven', desc: 'Every solution designed to deliver measurable business impact.', bg: '#dde4f0', border: '#8db3f4'},
    ]
    return (
        <section className="w-9/10 bg-white flex flex-col lg:flex-row py-10 gap-6">
            <div className='flex flex-col w-2/5 gap-4'>
                <h2 className=" w-3/5 text-2xl lg:text-4xl font-garamond font-bold">Why Businesses Choose Us</h2>
                <p className=" w-4/5 md:w-4/5 md:text-base lg:w-full text-sm lg:text-base leading-6.5 font-montserrat">Built to elevate performance, reduce costs, and deliver the outcomes your business cares about most.</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 justify-center w-[90%] sm:w-4/5 md:w-[70%] xl:w-3/5 gap-4">
                {choices.map((choice, index) => {
                    const first = choice.id/1 === 1
                    const second = choice.id/2 === 1
                    const third = choice.id/3 === 1
                    return ( 
                    <motion.div
                    ref={ref}
                    initial={{x: first ? 300 : third ? 300 : 0, y: first ? 180 : second ? 180 : 0}}
                    animate={isInView ? {x: 0, y: 0} : {}}
                    transition={{duration: 1, delay: index * 0.4, ease: 'easeOut'}}
                    key={index} 
                    className='flex flex-col gap-2 justify-center items-center w-47.5 md:w-50 lg:w-62.5 xl:w-75 h-37.5 border-solid border' style={{ borderColor: choice.border }}>
                        <h3 className="font-semibold text-base text-center xl:text-xl font-montserrat">{choice.title}</h3>
                        <p className="text-center text-xs lg:text-[14px] xl:text-base w-[80%] font-montserrat">{choice.desc}</p>
                    </motion.div>
                )})}
            </div>
        </section>
    )
}

export default BusinessesChoose;