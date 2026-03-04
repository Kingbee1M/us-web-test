import Button from "../UI/Button"

const ServiceHeader = () => {
    return (
            <header className="flex flex-col items-center w-full gap-5">
                <h1 className="font-garamond text-2xl lg:text-4xl  text-center font-bold w-4/5 mt-9">Where Artificial Intelligence Meets Emotional Intelligence to Redefine Customer Experience</h1>
                    
                <p className="lg:text-base text-sm w-[80%] sm:w-[60%] md:w-auto text-center text-pretty text-text-color font-montserrat">At Outcess US, we don&apos;t just outsource, we engineer intelligent experiences.<br/>
                We combine AI-powered automation, real-time analytics, and emotionally intelligent human <br/>
                support to help businesses deliver service that feels effortless, personal, and unforgettable.<br/>
                From customer engagement to back-office optimization, every solution we build is designed <br/>
                to help your brand connect deeper, scale smarter, and perform better.<br/>
                </p>

                <Button variant="primary" >Work With Us</Button>
            </header>
    )
}
export default ServiceHeader