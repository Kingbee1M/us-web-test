
import logo from "../assets/svg/logosvg.svg"
import { Link } from "react-router";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";


type NavLinks = Record<string, Record<string, string>>;



const FooterUS = () => {
    const links: NavLinks = {
        'Company': {'About Us': '/us/about Us','services': '/us/services', 'ISO Quality Statement': '/isoqualitystatement', 'Privacy Policy': '/data-policy'},
        'Support': {'Contact Us': '/us/contact Us', 'Blog': 'https://outcess-microsite.blogspot.com/',},
    }

    const infos = ['Suite 125, 321 Ballenger Centre Drive, Frederick, MD 21703, USA', 'info@outcess.com', '02013300308']
    return (
        <div className="w-full flex flex-col justify-center items-center bg-[#f7f7f7]">
            <div className="w-[90%] flex justify-evenly items-start gap-4 mt-16 bg-[#f7f7f7] pb-5">
                <img src={logo} alt="logo" className="w-1/5"/>
                
                
                    {Object.keys(links).map((cat) => (
                        <div key={cat} className="max-w-62.5 flex flex-col gap-2">
                            <h4 className="font-semibold">{cat}</h4>
                            <div className="flex flex-col gap-1 w-full">
                            {Object.keys(links[cat]).map((link) => {
                                const url = links[cat][link];

                                return url.startsWith("http") ? (
                                    <a
                                        key={link}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-secondary-purple w-auto text-[#6d7280] lg:text-base text-xs font-montserrat cursor-pointer"
                                    >
                                        {link}
                                    </a>
                                ) : (
                                    <Link
                                        key={link}
                                        to={url}
                                        className="hover:text-secondary-purple w-auto text-[#6d7280] lg:text-base text-xs font-montserrat cursor-pointer"
                                    >
                                        {link}
                                    </Link>
                                );
                            })}
                            </div>
                        </div>
                    ))}
                

                <div className="w-1/4 text-[16px] flex flex-col gap-2 text-[#6d7280]">
                    {infos.map((info, index) => (
                        <p key={index} className="w-full font-montserrat wrap-break-word lg:text-base text-xs">{info}</p>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center, xs:pl-5 py-16 xs:pr-24 sm:px-24 bg-[#F04217] text-white">
                <p>© 2025 Outcess. All rights reserved.</p>
                <div className="flex items-center gap-3 text-white">
                    <a href="https://www.instagram.com/outcess.us?igsh=emxjanNpN2p5YW1i" target="blank" className="text-white decoration-none text-lg sm:text-3xl"><RiInstagramFill /></a>
                    <a href="https://www.linkedin.com/company/outcess-us/" target="blank"  className="text-white decoration-none text-lg sm:text-3xl"><IoLogoLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default FooterUS