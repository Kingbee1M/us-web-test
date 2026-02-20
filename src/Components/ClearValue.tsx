import img1 from '../assets/svg/paperbag.svg'
import img2 from '../assets/svg/airplane.svg'
import img3 from '../assets/svg/dollarsign.svg'
import img4 from '../assets/svg/hotspot.svg'
import img5 from '../assets/svg/whiteheart.svg'
import Button from '../UI/Button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type DescObject = Record<string, string[]>;

type ValueItem = {
  icon: string | null;
  color: string | null;
  title: string;
  desc: string | DescObject;
};

const ClearValue = () => {
    const ref = useRef(null)
        const isInView = useInView(ref, {
        once: true,
        margin: "-120px"
    })
    const values: ValueItem[] = [
        {icon: null, color: null, title: 'Clear Value for Every Industry', desc: 'We support fast-growing and high-demand industries with solutions that cut cost, improve satisfaction, and scale quickly.'},
        {icon: img1, color: '#ff6b6b', title: 'E-Commerce & Retail', desc: {'What We Do': ['Order support, returns, delivery tracking', 'Marketplace and seller support', '24/7 customer service across channels'], 'Value Delivered': ['30–50% lower support cost.', 'Faster response time during peak seasons.', 'Increased repeat purchase and loyalty.'], 'Offshore Advantages': ['Large trained ecommerce teams for seasonal scale.']}},
        {icon: img2, color: '#aa96da', title: 'Travel & Hospitality', desc: {'What We Do': ['Booking support and itinerary changes', 'Guest relations and loyalty program management', 'Pre- and post-travel assistance'], 'Value Delivered': ['Better guest experience', 'Faster disruptions handling', 'Peak travel scaling at offshore rates.']}},
        {icon: img3, color: '#78e9d5', title: 'Fintech & Financial Service', desc: {'What We Do': ['KYC, onboarding, verification, anti-fraud checks', 'Customer support for cards, wallets, loans', 'Dispute resolution and transaction assistance'], 'Value Delivered': ['High compliance accuracy', 'Reduced fraud-related workload.', 'Lower operational expense with secure offshore teams.']}},
        {icon: img4, color: '#f38181', title: 'Telecom & Media', desc: {'What We Do': ['Billing support, technical troubleshooting', 'Device setup and service activation', 'Retention and win-back programs'], 'Value Delivered': ['Reduced churn.', 'Higher first-call resolution', 'Cost-efficient tier-1 and tier-2 support.']}},
        {icon: img5, color: '#fa934e', title: 'Healthcare & HealthTech', desc: {'What We Do': ['Patient support, appointment management', 'Telehealth assistance and provider coordination', 'Claims management and benefit verification'], 'Value Delivered': ['Improved patient satisfaction.', 'HIPAA-aware/secure handling', 'Scalable teams with compassion training.']}},
    ]
    return (
        <div className='w-full items-center flex flex-col bg-white'>
            <div className='bg-white mt-44 w-[95%] flex flex-row flex-wrap justify-center items-start gap-y-12 gap-x-5'>
                {values.map((value, index) => {
                    return (
                    
                    value.icon === null ? (
                        <motion.div
                        ref={ref}
                        key={index} 
                        className='w-92.5 h-100'
                        initial={{x: -150, opacity: 0}}
                        animate={isInView ? {x: 0, opacity: 1} : {}}
                        transition={{duration: 1.2, ease: 'easeOut', delay: 1}}
                        >
                            <h2 className='text-4xl font-garamond text-heading-color mt-9 mb-1'>{value.title}</h2>
                            
                                                        {typeof value.desc === "string" && (
                            <p className='text-text-color text-[15px] font-montserrat'>{value.desc}</p>
                            )}
                        </motion.div>
                    ) : (
                        <div key={index} className='w-92.5 border border-[#d5d5d5] h-162.5 flex flex-col justify-start items-start pl-6 pt-6'>
                            <div className='w-12 h-12 p-2 rounded-lg flex justify-center items-center mb-8' style={{backgroundColor: value.color || '#cccccc'}}>
                                <img src={value.icon} alt={value.title} className='w-7.5 h-7.5' />
                            </div>

                            <div className='flex flex-col items-start'>
                                <h3 className='font-bold text-xl font-montserrat'>{value.title}</h3>
                                {Object.entries(value.desc as Record<string, string[]>).map(([key, val], idx) => (
                                    <div key={idx} className='mb-4 w-[90%] flex flex-col items-start'>
                                        <h4 className='font-demibold text-base mb-2 w-full my-3'>{key}</h4>
                                        <ul className='list-disc pl-4 w-full '>
                                            {val.map((item, i) => (
                                                <li key={i} className='text-base text-text-color mt-1 font-montserrat'>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )})}



            </div>

            <Button variant='primary' showArrow={true} className='my-20'>Explore Your Industry</Button>
        </div>
    )
}

export default ClearValue;