import wave from '../assets/svg/waveup.svg'
import wavedown from '../assets/img/wavedown.png'
import CoreCards from './CoreCards'

const CoreSolutions = () => {
    const cores = [
        {id: 1, value: true, title: 'Digital Transformation & AI Solutions', subtitle: 'We deploy intelligent automation and analytics to convert customer interactions into actionable insights.', desc: 'Our intelligent automation tools and analytics platforms help businesses turn every customer interaction into actionable intelligence.', offers: ['Predictive analytics and behavioral insights', 'Speech and text analytics', 'AI chatbots & virtual assistants', 'Data integration & process automation'], impacts: 'Faster decision-making, predictive support, and improved performance'},
        {id: 2, value: true, title: 'Business Process Outsourcing (BPO)', subtitle: 'Efficiency, Elevated by Intelligence', desc: 'We manage critical business operations with AI efficiency and human expertise.', offers: ['Back-office management and workflow automation', 'Finance, data, and compliance outsourcing', 'Campaign & customer lifecycle management', 'Documentation and reporting'], impacts: 'Streamlined operations, reduced costs, and scalable efficiency'},
        {id: 3, value: true, title: 'Customer Experience Outsourcing', subtitle: 'Empathy Meets Intelligence', desc: 'We deliver AI-enhanced, omnichannel customer support designed for speed, empathy, and personalization.', offers: ['Voice, chat, social, and email support with sentiment analysis', 'AI agent-assist tools', ' 24/7 multilingual global coverage', 'Real-time CX analytics dashboards'], impacts: 'Higher customer satisfaction, faster resolution, and stronger loyalty'},
        {id: 4, value: false, title: 'Specialized Industry Solutions', subtitle: 'Tailored Expertise for Every Sector', desc: 'Sector-specific outsourcing combining domain expertise with AI intelligence.', offers: [], impacts: '', industries: {'E-commerce & Retail': 'Omnichannel support, order management, cart recovery', 'Healthcare & HealthTech': '  Non-clinical engagement and device support', 'Fintech & Financial Services': ' KYC, compliance, transaction support', 'Telecom & Media': 'Retention, upsell, technical support', 'Travel & Hospitality': ' Reservations and disruption management', 'Utilities & Energy': 'Billing support and outage communication.', 'Education & EdTech': ' Enrollment and helpdesk support', 'Result': ' Industry-aligned efficiency and trusted customer experiences'}}
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