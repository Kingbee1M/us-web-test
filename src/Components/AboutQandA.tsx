import { useState } from "react"
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import img from '../assets/svg/purplewave.svg'


const AboutQandA  = () => {
    const [openId, setOpenId] = useState<number | null>(null)
    const QAs = [
        {id: 1, Q: 'Human + AI Synergy', A: 'We leverage intelligent tools from real-time speech sentiment analysis to predictive analytics alongside emotionally intelligent teams that understand the nuances of human interaction.'},
        {id: 2, Q: 'Global Expertise, Local Heart', A: 'With U.S. leadership and African delivery centers, we offer the perfect balance of onshore credibility and offshore efficiency, delivering results without compromise.'},
        {id: 3, Q: 'Scalable & Flexible Models', A: ( <>Whether you&apos;re a growing startup or a global enterprise, our outsourcing solutions adapt seamlessly to your operational needs, timelines, and growth goals.</>)},
        {id: 4, Q: 'Continuous Innovation', A: 'We are relentless in our pursuit of better, continuously refining processes, training programs, and technologies that elevate service delivery and strengthen customer loyalty.'},
    ]

    const toggle = (id: number) => {
       setOpenId(prev => prev === id ? null : id!)
    }
    return (
        <div className="bg-[#FFFBF8] w-full flex flex-col items-center py-32 gap-7 relative">
            <h2 className="font-garamond font-bold text-3xl md:text-5xl text-heading-color">How We Deliver</h2>
            <p className="text-sm sm:text-base w-[90%] sm:w-4/5 lg:w-2/5 text-text-color font-montserrat text-center">Combining deep expertise with collaborative innovation to deliver solutions that truly meet your needs</p>

            <div className="flex flex-col gap-3 w-[70%]">
                {QAs.map((qa) => (
                    <div key={qa.id} className={`border-2 border-solid border-[#F7B081] w-full p-3 flex justify-between items-start rounded-lg ${openId === qa.id && 'bg-[#FDE0CD]'}`}>
                        <div >
                            <h3 className="font-semibold font-montserrat mb-2">{qa.id}. {qa.Q}</h3>
                            {openId === qa.id && (
                                <p className="font-montserrat">{qa.A}</p>
                            )}
                        </div>
                        
                       <div
                        onClick={() => toggle(qa.id)}
                        className={`text-2xl cursor-pointer`}
                        >
                        {openId === qa.id ? <RiSubtractLine/> : <RiAddLine/>}
                        </div>

                    </div>
                ))}
            </div>
            <img src={img} alt="wave" className='w-full absolute bottom-0' />
        </div>
    )
}

export default AboutQandA