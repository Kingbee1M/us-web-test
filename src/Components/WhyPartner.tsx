import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Button from "../UI/Button";

const WhyPartner = () => {
  const reasons = [
    {title: 'Industry Expertise', desc: 'Deep understanding of industry-specific challenges'},
    {title: 'Compliance Ready', desc: 'Regulation-aligned processes you can trust'},
    {title: 'Multilingual Support', desc: 'Reach a diverse customer base globally'},
    {title: 'Proven Track Record', desc: 'Success across healthcare, fintech, e-commerce, and more'},
    {title: 'Tailored Solutions', desc: 'Custom outsourcing designed for your market'},
  ];

  const [index, setIndex] = useState(0);
  const current = reasons[index];

    const change = (direction: "next" | "prev") => {
        if (direction === "next") {
        setIndex((prev) => (prev + 1) % reasons.length);
        } else {
        setIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
        }
    };
    return (
        <section className="w-full flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold text-center font-garamond">Why Partner with Outcess US?</h2>
            <p className="text-base font-montserrat text-center w-[96%] lg:w-[45%] ">
            Built to elevate performance, reduce costs, and deliver the outcomes your business cares about most.
            </p>

            <Button variant="primary" className="">Work With Us</Button>

            <div className="w-full lg:w-[70%] flex flex-col justify-between items-center gap-6 bg-[#FF660033] rounded-2xl p-8 md:px-24 py-12 mt-10 mb-8">
            <div className='w-full flex items-center justify-between'>
                <h2 className="lg:text-5xl xl:leading-14 text-3xl font-semibold w-2/5 font-garamond">{current.title}</h2>
                <p className="text-base xl:text-base text-text-color lg:w-[35%] text-center font-medium font-montserrat">{current.desc}</p>
            </div>
            

            <div className="w-2/5 sm:w-9/10 flex justify-end gap-3">
                            
                <button
                    onClick={() => change("prev")}
                    className="text-3xl rounded-full cursor-pointer"
                >
                    <IoChevronBack />
                </button>

                {/* index display */}
                <p>{index + 1}/{reasons.length}</p>

                <button
                    onClick={() => change("next")}
                    className="text-3xl rounded-full cursor-pointer"
                >
                    <IoChevronForward />
                </button>
            </div>
            </div>
        </section>

    )
}

export default WhyPartner;
