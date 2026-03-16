import img from '../assets/svg/darkpinkwave.svg'
import { CiMail,CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const InTouch = () => {
    const acess = [
        {title: 'Get in touch', desc: 'We’ love to hear from you. Our friendly team is always here to chat.', icon: null},
        {title: 'Chat to us', desc: 'info@outcess.com', icon: (<><CiMail/></>)},
        {title: 'Office', desc: 'Suite 125, 321 Ballenger Centre Drive, Frederick, MD 21703, USA', icon: (<><CiLocationOn/></>)},
        {title: 'Phone', desc: '+1 (204) 992-7513', icon: (<><FiPhone/></>)},
    ] 
    return (
        <div className='relative w-full flex lg:flex-row flex-col items-center lg:items-start justify-around gap-6 lg:gap-0 bg-pink py-12 lg:py-28 px-2'>
            <img src={img} alt="wave" className='w-full absolute -top-3 lg:-top-8' />
            <div className='w-2/3 lg:w-[90%] xl:w-full flex lg:flex-row flex-col items-center lg:items-start justify-around gap-6 lg:gap-0'>
            {acess.map((ace, index) => {
               return ace.icon === null ? (
                    <div key={index} className=' flex items-center lg:items-start flex-col gap-1 w-4/5 lg:w-2/5 xl:w-[30%]'>
                        <h3 className='text-heading-color font-garamond font-semibold text-lg md:text-2xl w-1/2 sm:w-2/5 md:w-[30%] lg:w-auto'>{ace.title}</h3>
                        <p className='text-text-color xs:text-center sm:text-left md:text-center lg:text-left font-montserrat text-xs md:text-lg'>{ace.desc}</p>
                    </div>
                ) : (
                    <div key={index} className='flex gap-2 max-w-75 items-start'>
                        <p className='text-text-color pt-1'>{ace.icon}</p>
                        
                        <div className='flex lg:flex-col items-baseline lg:items-start gap-2 lg:gap-0'>
                            <p className='text-text-color font-montserrat text-base md:text-lg'>{ace.title}</p>
                            <p className='text-heading-color font-montserrat font-semibold text-xs md:text-base'>{ace.desc}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default InTouch