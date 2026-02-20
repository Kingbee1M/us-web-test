import wave from '../assets/svg/waveup.svg'
import wavedown from '../assets/img/wavedown.png'
import CoreCards from './CoreCards'

const CoreSolutions = () => {
    const cores = [
        {id: 1, value: true, title: 'Digital Transformation & AI Solutions', subtitle: 'Smarter Systems. Sharper Insights. Stronger Connections.', desc: 'Our intelligent automation tools and analytics platforms help businesses turn every customer interaction into actionable intelligence.', offers: ['Predictive analytics and behavioral insights', 'Speech and text analysis ', 'AI chatbots and virtual assistants', 'Data integration and process automation'], impacts: 'Informed decisions, predictive support, and improved business outcomes faster'},
        {id: 2, value: true, title: 'Business Process Outsourcing (BPO)', subtitle: 'Efficiency, Elevated by Intelligence', desc: 'We take care of the critical operations that keep your business moving with automation that learns and humans who care.', offers: ['Back-office management and workflow automation', 'Finance, data, and compliance process outsourcing', 'Campaign and customer life-cycle management', 'End-to-end documentation and reporting'], impacts: 'Simplified operations, reduced costs, and optimized performance, powered by AI precision and human judgment'},
        {id: 3, value: true, title: 'Customer Experience Outsourcing', subtitle: 'Empathy Meets Intelligence', desc: 'Exceptional customer service is no longer just about speed, it’s about understanding.We deliver AI-enhanced, omnichannel support that listens, learns, and responds with empathy.', offers: ['Voice, chat, social, and email support powered by sentiment analysis', 'AI-driven agent assist tools for faster, more personalized responses', '24/7 multilingual support across continents', 'Analytics dashboards that track performance and emotion in real time'], impacts: ' Stronger brand loyalty, faster resolutions, and experiences that truly resonate'},
        {id: 4, value: false, title: 'Specialized Industry Solutions', subtitle: 'Tailored Expertise for Every Sector', desc: 'Every industry has its rhythm and we understand each one. Our teams combine deep domain knowledge with AI-powered insights to deliver customized outsourcing solutions.', offers: [], impacts: '', industries: {'E-commerce & Retail Outsourcing': ' Omnichannel support, order management, and cart recovery', 'Healthcare & HealthTech': ' Non-clinical patient engagement and device support', 'Fintech & Financial Services': 'KYC, compliance, and transaction support.', 'Telecom & Media': ' Customer retention, up-selling, and technical support.', 'Travel & Hospitality': ': Reservations, loyalty programs, and disruption management', 'Utilities & Energy': 'Billing inquiries, outage updates, and customer retention.', 'Education & EdTech': ' Enrollment, helpdesk, and student success support.', 'Impact': ' Operational efficiency, happier customers, and brand experiences that build trust.'}}
    ]

    return (
        <div className='w-full flex flex-col relative'>
            <img src={wave} alt='waveup' className='w-full'/>
            <div className='bg-[#F3E5F5] w-full flex flex-col items-center gap-5 pb-32'>

                <h2 className='font-garamond text-4xl font-bold '>Our Core Solutions</h2>

                <div className='w-full flex flex-wrap justify-around gap-y-12 items-stretch px-2'>
                    {cores.map((core, index) => (
                   <CoreCards key={index} core={core} />
                    ))}
                </div>


            </div>
            <img src={wavedown} alt='waveup' className='w-full absolute bottom-0'/>
        </div>
    )
}
export default CoreSolutions;