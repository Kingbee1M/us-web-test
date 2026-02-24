import Button from "../UI/Button"
import VideoPlayer from "./VideoUI"

const AboutHeader = () => {
    return (
        <div className="w-full flex flex-col items-center gap-8 mt-5">
            <h1 className="w-[70%]  text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-garamond font-bold text-center">Blending Artificial Intelligence With Emotional Intelligence To Power Human-Centered Experiences</h1>
            <div className="flex flex-col items-center">
                <p className="hidden md:flex w-4/5 sm:w-4/5 lg:w-[90%] xl:w-[70%] text-lg text-text-color font-montserrat text-center text-pretty">At Outcess US, we believe the most powerful connections in business are built at the intersection of technology and empathy.
                We are a customer experience and business process outsourcing (BPO) company helping brands grow through intelligent, emotionally attuned interactions. By combining AI automation, data-driven insights, and human understanding, we empower organizations to create meaningful relationships with their customers — at scale.
                </p>
                <p className="w-4/5 sm:w-4/5 lg:w-[90%] xl:w-2/3 text-lg text-text-color font-montserrat text-center text-pretty">With over 19 years of global outsourcing experience, Outcess has evolved from its African roots into a global player with a U.S. presence in Texas and Delaware and delivery centers across Africa. Our mission is simple: to help brands scale smarter, connect deeper, and operate more efficiently through intelligent outsourcing.</p>
            </div>

            <Button variant="primary">Partner With Outcess US</Button>
            
            <div className="lg:w-225 md:w-175 sm:w-137.5 w-112.5 flex justify-center items-center">
                <VideoPlayer width={1000} src={'https://drive.google.com/file/d/1uQU_Kqozxhvd2AeUg6vE6qmjH2SyBgJ6/view'} />
            </div>
        </div>
    )
}

export default AboutHeader