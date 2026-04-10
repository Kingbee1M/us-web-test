
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import { PiStarFourLight } from "react-icons/pi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";



const IndustriesData = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeId, setActiveId] = useState<number | null>(null);


    const updateScrollButtons = () => {
        const el = containerRef.current;
        if (!el) return;

        const atLeft = el.scrollLeft <= 0;
        const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

        setCanScrollLeft(!atLeft);
        setCanScrollRight(!atRight);
    };

    useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollButtons()

    el.addEventListener("scroll", updateScrollButtons);

    return () => el.removeEventListener("scroll", updateScrollButtons);
    }, []);

    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = 420;

        if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    const datas = [
        {title: 'E-Commerce & Retail Outsourcing', list: ['Seamless customer journeys from browsing to post-purchase.', 'Faster resolutions, smoother returns, and higher cart recovery.', 'Peak-season capacity without compromising experience.'], desc: 'We help online and in-store retail brands deliver seamless customer experiences from browsing to post-purchase.', list2: ['Order inquiries, returns, and exchanges', 'Cart recovery & win-back campaigns', 'Seasonal surge management', 'Omnichannel support (voice, chat, email, social)']},
        {title: 'Healthcare & HealthTech (Non-Clinical) Outsourcing', list: ['Secure, compliant, efficient patient interactions.', 'Reduced wait times, accurate information handling, and consistent service quality.'], desc: 'We support healthcare and technology providers with secure, compliant, and efficient patient and customer engagement.', list2: ['Tier-1 technical support for medical devices and platforms', 'Appointment scheduling and reminders', 'Order processing and inquiries', 'Helpdesk services to reduce response delays']},
        {title: 'Financial Services & Fintech Outsourcing', list: ['Scaled service delivery with full accuracy and compliance.', 'Transparent processes, reduced operational risk, and improved customer trust.'], desc: 'Outcess US helps financial institutions scale service delivery while maintaining trust, accuracy, and compliance.', list2: ['KYC and onboarding support', 'Transaction and account inquiries', 'Collections and recovery services', 'Fraud monitoring and prevention']},
        {title: 'Travel, Hospitality & Airlines Outsourcing', list: ['Frictionless experiences across reservations, changes, and loyalty programs.', 'Faster issue resolution that keeps travelers moving and guests satisfied.'], desc: 'We deliver customer support that keeps travelers moving and guests satisfied — wherever their journeys take them.', list2: ['Reservations, cancellations, and modifications', 'Loyalty program support', 'Multilingual guest assistance', 'Travel disruption management (delays, cancellations)']},
        {title: 'Telecom & Media Outsourcing', list: ['Lower churn, stronger retention, and faster technical troubleshooting.', 'Clear communication across subscription, billing, and service inquiries.'], desc: 'Telecom and media providers rely on Outcess to reduce churn, strengthen retention, and elevate customer experience.', list2: ['Device setup and troubleshooting', 'Subscription management', 'Customer retention and upselling campaigns', 'Social media and live chat support']},
        {title: 'Utilities & Energy Outsourcing', list: ['Shorter wait times and faster ticket closure during high-volume periods.', 'Accurate billing support, streamlined outage reporting, and improved satisfaction.'], desc: 'Utilities face high inquiry volumes, we streamline the process to ensure faster resolutions and better customer satisfaction.', list2: ['Billing & payment support', 'Service activation & disconnection requests', 'Outage reporting & updates', 'Retention & loyalty campaigns']},
        {title: 'Education & EdTech Outsourcing', list: ['Higher student engagement through timely responses and guided support.', 'Smooth enrollment, quicker issue resolution, and improved retention.'], desc: 'We help institutions and digital learning platforms keep students engaged, supported, and motivated at scale.', list2: ['Enrollment and admissions support', 'Financial aid and scholarship inquiries', 'Platform technical support', 'Student retention outreach']},
        {title: 'Government & Public Sector Outsourcing (via partnerships)', list: ['Efficient, transparent service delivery for citizens at scale.', 'Smooth enrollment, quicker issue resolution, and improved retention.'], desc: 'Our compliant and scalable public sector outsourcing solutions empower government agencies to serve citizens efficiently and transparently.', list2: ['Citizen helplines', 'Claims and benefits processing', 'Document management', 'Multilingual support']},
    ]
    return (
        <section className="w-full h-200 mt-10 flex flex-col items-center gap-6">

            <div className="w-4/5 flex justify-end gap-3">
                 {canScrollLeft && (
                    <button onClick={() => scroll("left")} className="text-4xl md:text-3xl border border-solid border-[#EAECF0] p-2 rounded-full" >
                    <IoChevronBack/>
                    </button>
                )}

                {canScrollRight && (
                    <button onClick={() => scroll("right")} className="text-4xl md:text-3xl borderorder-solid border-[#EAECF0] p-2 rounded-full">
                    <IoChevronForward />
                    </button>
                )}
                
            </div>
            <div ref={containerRef} className="w-[90%] flex flex-row overflow-x-auto gap-3 sm:gap-6 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {datas.map((data, index) => (
                <button
                key={index}
                onClick={() => setActiveId(activeId === index ? null : index)}
                className={`relative group cursor-pointer group w-103.75  ${activeId === index? 'h-162.5 lg:h-162.5': 'h-112.5 hover:h-132.5'} overflow-hidden p-5 flex flex-col shrink-0 gap-3 border-2 border-orange-border rounded-lg bg-bot-comp-bg transition-all duration-500 ease-out`}>
                    <h2 className="w-full text-2xl font-semibold font-garamond text-left">{data.title}</h2>
                    <ul className="list-disc list-outside w-full flex flex-col gap-3">
                        {data.list.map((lis) => (
                            <li key={lis} className="flex items-center gap-2 w-full text-[16px] font-montserrat leading-relaxed text-text-color text-left"><PiStarFourLight className="text-[25px]"/>{lis}</li>
                        ))}
                    </ul>
                    <p className="text-xl font-montserrat leading-7 text-text-color text-left text-[16px] ">{data.desc}</p>
                    <p className={`w-full flex justify-end ${activeId === index ? 'hidden' : 'flex'} absolute bottom-2 right-2`}><IoIosArrowRoundDown className="text-2xl"/></p>
                    <ul className={`list-none flex-col gap-3 mt-5 ${activeId === index ? 'flex' : 'hidden'} group-hover:flex`}>
                        {data.list2.map((lis) => (
                            <li key={lis} className="flex items-center w-full text-[16px] font-montserrat leading-tight text-text-color text-left"><IoIosArrowRoundForward className="text-lg" />{lis}</li>
                        ))}
                    </ul>
                </button>
            ))}
            </div>
        </section>
    )
}

export default IndustriesData