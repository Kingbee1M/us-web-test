import img1 from '../assets/img/purpleglass.png'
import img2 from '../assets/img/office.png'
import img3 from '../assets/img/greyglass.png'
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import Button from '../UI/Button';
import wave from "../assets/svg/footerwave.svg"


const Blog = () => {

    //will change to api data later
    const blogPosts = [
        {img: img1, date: '25/10/2026', title: 'Making US Healthcare Easier ', desc: (<>It&apos;s no news that the US healthcare has had lots of complaints in the past years due to slow response or no response at all…</>), link: 'https://docs.google.com/document/d/1PVxDaBr4j9zc-ak0_xt32JqbnQ20o256d6THgOI8dWM/edit?usp=drivesdk'},
        {img: img2, date: '25/10/2026', title: 'Evaluating Cloud Solutions for Business Optimization ', desc: 'Cloud solutions let you run apps, store data, and scale services over the internet instead of expensive local servers. For US brands, that means faster launches, easier collaboration, and the ability to scale up during busy moments — all without building and managing a physical data center.', link: 'https://docs.google.com/document/d/1XYZkbyPEpZggLzSZi38_13xf7qAoGJC7NNEysvdPn1M/edit?usp=drivesdk'},
        {img: img3, date: '25/10/2026', title: 'The Ultimate Customer Leverage: Give Them Control', desc: (<>Think about the last time you ignored a call, deleted a marketing email, or abandoned a checkout because the process was long. Customers do the same — and fast. Today&apos;s consumers expect to be reached on their terms: the channel they prefer, at the moment they&apos;re ready, with an experience that doesn&apos;t waste their time.</>), link: 'https://docs.google.com/document/d/1Z_gvn0BZICcA3H1Zi-y8uKkfqDu365DHIby5nXS8qbA/edit?usp=drivesdk'},
    ]

    function formatDate(dateStr: string) {
        const [day, month, year] = dateStr.split("/");
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = months[parseInt(month) - 1];
        return `${monthName} ${parseInt(day)}, ${year}`;
    }

    return (
        <article className="bg-bot-comp-bg w-full h-auto flex flex-col items-center mt-28 pb-20 relative py-10">
            <img src={wave} alt='wave' className='w-full absolute bottom-0' />
            <h2 className="font-garamond text-4xl mb-3">Blogs & News</h2>
            <p className="w-4/5 lg:w-auto font-montserrat text-[#060606] text-center text-sm lg:text-base lg:text-left">Stay informed with the latest insights, trends, and best practices in customer experience and outsourcing.</p>
            {/* CARDS    */}
            <div className='flex flex-col lg:flex-row w-4/5 justify-center gap-5 mt-12'>
                {blogPosts.map((post, index) => (
                    <div key={index} className='w-75 lg:w-125 h-100 flex flex-col gap-2 p-3 bg-white shadow-2xl rounded-lg border border-[#d5d5d5]'>
                        <div className='w-full'>
                            <img src={post.img} alt={post.date} className='w-full contain'/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendar className='text-text-color' />
                            <p className='text-xs text-text-color'>{formatDate(post.date)}</p>
                        </div>
                        <h3 className='font-montserrat font-demibold line-clamp-2'>{post.title}</h3>
                        <p className='text-text-color text-[14px] font-montserrat line-clamp-2'>{post.desc}</p>
                        <a href={post.link} target='blank' className='text-[#f04217] flex items-center gap-2 font-montserrat text-sm'>Read More <FaArrowRight /></a>
                    </div>
                ))}
            </div>


            <div className='mt-20 w-full flex flex-col items-center gap-4 '>
                <h2 className="font-garamond text-center text-2xl lg:text-4xl">Let&apos;s Build a Smarter Customer Experience</h2>
                <p className='w-4/5 lg:w-auto font-montserrat text-text-color text-sm lg:text-base text-center'>Partner with Outcess US to create intelligent, human-centered, and cost-efficient customer experiences.</p>
                <Button variant='primary' showArrow={true} >Let&apos;s Build Your CX Advantage</Button>
            </div>
        </article>
    )
}

export default Blog;