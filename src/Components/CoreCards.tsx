import { motion } from "framer-motion";
import useOnceInView from '../hooks/useOnceInView'

type Core = {
  id: number;
  value: boolean;
  title: string;
  subtitle: string;
  desc: string;
  offers: string[]; // <- fixed
  impacts: string;
  industries?: Record<string, string>; // <- optional for else block
};

type CoreCardsProps = {
  core: Core;
};

const CoreCards = ({ core }: CoreCardsProps) => {
      const { ref, isInView } = useOnceInView();
        const rightcomp = core.id % 2 === 0;
    if (core.value) {
        return (
            <motion.div
            ref={ref}
            key={core.id}
                className='rounded-xl w-100 sm:w-150 relative group'
                initial={{x: rightcomp ? -100 : 100, z: rightcomp ? 0 : 30}}
                animate={isInView ? {x: 0, z: 0}: {}}
                transition={{duration: 0.8, delay:0, ease: 'easeInOut'}}
                >

                {/* shadow */}
                {/* <div className='bg-[#b7cef5] w-full h-[85%] absolute -bottom-4 left-6 rotate-[4deg] rounded-lg group-hover:rotate-[-4deg] transition-transform duration-500 ease-out'></div> */}

                {/* card shell  */}
                <div className=" relative z-10 w-full h-full rounded-lg border-2 border-[#b7cef5] overflow-hidden bg-[#b7cef5]">
                    <div className='w-full h-full text-xl flex flex-col gap-3 z-30 p-6 pb-5 relative rounded-lg bg-white'>
                        <h2 className='font-garamond text-heading-color text-2xl font-semibold'>{core.title}</h2>
                        <p className='font-montserrat text-text-color leading-loose text-[14px]'>{core.desc}</p>
                        <div>
                            <h3 className='font-montserrat text-heading-color w-full font-demibold text-base'>What We Offer:</h3>
                            <ul className='pl-8 flex flex-col gap-3 text-[14px]'>
                                {core.offers?.map((offer, index) => (
                                    <li key={index} className='font-montserrat text-text-color list-disc'>{offer}</li>
                                ))}
                                </ul>
                        </div>
                        <h3 className=' text-base font-semibold font-montserrat'>Result: <span className='font-montserrat text-text-color leading-loose text-[14px] font-normal'>{core.impacts}</span></h3>
                    </div>
                </div>
            </motion.div>
            )
        } else {
        return (
            <motion.div
                ref={ref}
                    key={core.id} 
                    className='rounded-xl w-100 sm:w-150 relative group'
                    initial={{x: -100, z: 0}}
                    animate={isInView ? {x: 0, z: 0}: {}}
                    transition={{duration: 1.2, delay:0, ease: 'easeInOut'}}
                    >
                    {/* <div className='bg-[#D582E3] w-[95%] h-[90%] absolute -bottom-4 left-9 rotate-[4deg] rounded-lg group-hover:rotate-[-4deg] transition-transform duration-500 ease-out'></div> */}
                    
                    {/* card shell  */}
                    <div className=" relative z-10 w-full h-full rounded-lg border-2 border-[#b7cef5] overflow-hidden bg-[#b7cef5]">
                        <div className='w-full h-full flex flex-col gap-3 z-30 p-6 relativep-6 relative rounded-lg bg-white'>
                        <h2 className='font-garamond text-heading-color text-2xl font-semibold'>{core.title}</h2>
                        <p className='font-montserrat text-text-color leading-loose text-[14px]'>{core.desc}</p>
                        <div>
                            <h3 className='font-montserrat text-heading-color text-lg font-semibold'>Industries We Serve</h3>
                            <div className='flex flex-col gap-2 mt-2'>
                            {Object.entries(core.industries || {}).map((indu, index) => (
                                <div key={index}>
                                    <span className='font-montserrat text-heading-color font-demibold text-[14px]'>{indu[0]}</span>: <span className='font-montserrat text-text-color text-[14px] font-normal leading-loose'>{indu[1]}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </motion.div>
        )
    }
}

export default CoreCards;