import StrokeText from "../../components/StrokeText/StrokeText";
import AboutUsImage from '../../assets/aboutUsImage.png'
export default function AboutUs() {
    return (
        <section className="bg-primary/95 text-white">
            <StrokeText title="About Us" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  md:pl-24 mt-12 md:mt-24 pb-20 ">
                <p className="w-full md:w-[45ch]  px-3 font-AeonikTRIALLight texg-lg md:text-xl leading-normal">
                    Expertmove aims to be the premier choice for exporting and shipping luxury and sports
                    cars worldwide, offering a seamless and trustworthy service that reflects elegance and
                    precision. We build long-term client relationships rooted in trust, excellence, and
                    attention to detail.
                    We provide end-to-end solutions for domestic and international car shipping, handling everything from personal vehicles to classic cars and heavy machinery with absolute professionalism.
                </p>

                <div className="relative pl-10 ">
                    <img src={AboutUsImage} alt="" className="rounded-tl-[150px] relative z-[10]" />
                    <div className="w-1/2 h-[130%] bg-secondrey absolute left-1/2 -translate-x-1/4 md:-translate-x-1/2 top-1/2 -translate-y-1/2 rounded-tl-[100px] rounded-br-[100px] -skew-x-6 "></div>
                </div>
            </div>
        </section>
    )
}