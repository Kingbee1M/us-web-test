import Button from "../UI/Button";
const IndustriesHeader = () => {
    return (
        <header className="w-full flex flex-col items-center gap-6 mt-5 lg:mt-10">
            <h1  className="font-garamond text-3xl md:text-4xl text-center font-bold w-4/5">The World Is Our Marketplace</h1>
            <p  className="w-4/5 sm:w-2/3 text-sm md:w-auto md:text:base text-center text-pretty text-text-color font-montserrat">At Outcess, we partner with brands across industries to create experiences that combine<br/>
            the precision of Artificial Intelligence with the warmth of human connection.<br/>
            Wherever your customers are, we help you reach them — with empathy, intelligence, and<br/>
             excellence at scale</p>

            <Button variant="primary">Work with Us</Button>
        </header>
    )
}

export default IndustriesHeader;