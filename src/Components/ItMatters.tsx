import { RxLightningBolt } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { CiChat1 } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import img from '../assets/svg/purplewave.svg'
import Counter from "./counter";


const ItMatters = () => {
        const blocks = [
            { number: 19, suffix: '+ years', desc: "BPO and CX leadership", pic: <MdPeopleAlt />, color: '#DDE4F0' },
            { number: 21, suffix: 'M+', desc: "Customer interactions handled annually", pic: <TbWorld />, color: '#F3E5F5' },
            { number: 4000, suffix: '+', desc: "Contact center seats deployed globally", pic: <RxLightningBolt />, color: '#FFF5CF' },
            { number: 3000, suffix: '+', desc: "CRM seats implemented for enterprise clients", pic: <CiChat1 />, color: '#FFF5CF' },
            { number: 24, suffix: '/7', desc: "Scalable support across multiple industries", pic: <GoClock />, color: '#DDE4F0' },
            { title: 'US-based', desc: "Operations in the US.", pic: <TbWorld />, color: '#F3E5F5' }, // No number here
        ];
    return (
        <section className="flex flex-col items-center w-full pb-20 py-9 gap-8 bg-[#FEF2EA] relative">
            <h2 className="text-3xl md:text-5xl text-heading-color font-garamond font-bold">Why It Matters</h2>
            <p className="text-center w-4/5 xl:w-[68%] text-base sm:text-xl xl:text-xl font-montserrat leading-8">Because customer experience is no longer just about response time or resolution,
              it&apos;s about understanding emotion, predicting needs, and creating trust.<br/>
            At Outcess US, we combine artificial intelligence that listens with humans who care  to deliver experiences that move people and drive measurable business growth.
            </p>

            <div className="flex flex-row flex-wrap gap-x-12 gap-y-5 w-4/5 justify-center mt-8">
                {blocks.map((block, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-75 h-40 gap-2 rounded-xl " >
                        
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[32px] font-bold text-center font-montserrat">
                                {block.number !== undefined ? (
                                    <Counter value={block.number} suffix={block.suffix} />
                                ) : (
                                    block.title
                                )}
                            </h3>
                            <p className="text-[10px] lg:text-base text-center font-montserrat">{block.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <img src={img} alt="wave" className='w-full absolute -bottom-7 sm:-bottom-10 rotate-180' />
        </section>
    )
}

export default ItMatters;
