import img1 from "../assets/img/hands.jpg"
import img2 from "../assets/img/blackgirl.jpg"
import img3 from "../assets/img/stacking.jpg"

const Mission = () => {
    const datas = [
        {id: 1,title: 'Our Mission', desc: 'To inspire and empower people, teams, and organizations to do more faster and smarter through the fusion of CX outsourcing, digital innovation, and emotional intelligence.', img: img1},
        {id: 2,title: 'Our Vision', desc: "To become Africa’s innovation leader in outsourced digital services, delivering world-class customer experiences that bridge global brands with human understanding.", img: img2},
        {id: 3,title: 'Our Purpose', desc: (<>To reimagine customer experience, one interaction at a time — through the power of human empathy and artificial intelligence. We don’t just handle processes; we build partnerships. <br/> Every conversation, every data point, every solution we design reflects our belief that technology should enhance human connection, not replace it.</>), img: img3},
    ]

    return (
        <div className="w-[70%] flex flex-col items-center my-20">
            <div className="w-full flex flex-col items-center gap-5">
                {datas.map((data, index) => {
                    return (
                        <div key={index} className={`w-full flex ${data.id === 2 ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
                            <div className={`w-[46%] flex flex-col items-start gap-2`}>
                                <h2 className={`font-bold font-garamond text-2xl sm:text-4xl w-auto grow-0`}>{data.title}</h2>
                                <p title="tap/hover to view the full text" className={`font-montserrat text-text-color text-sm sm:text-base lg:text-xl w-full max-h-44 hover:max-h-92.5 lg:max-h-92.5 overflow-y-clip text-pretty`}> {data.desc}</p>
                            </div>

                            <div className={`w-42.5 sm:w-50 lg:w-75 xl:w-100 h-42.5 sm:h-50 lg:h-75 xl:h-100 rounded-full border-4 border-solid overflow-clip flex justify-center items-center ${data.id === 1? 'border-[#4B80DA]' : data.id === 2 ? 'border-[#9C27B0]' : 'border-[#FBE07A]'} `}>
                                <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mission