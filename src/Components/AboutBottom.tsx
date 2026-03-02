import Button from "../UI/Button"

const AboutBottom = () => {
return (
        <section className="w-full flex items-center flex-col py-32 gap-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-3/5 text-center text-heading-color font-garamond font-bold">The future of customer experience is not human or artificial,  it’s both.</h2>
            <p className="text-center w-[44%] font-montserrat"> Let&apos;s build it together</p>
            <Button variant='primary'>Partner With Outcess US</Button>
        </section>
    )
}
export default AboutBottom