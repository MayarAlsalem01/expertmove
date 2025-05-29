import GridCardBody from "../../components/GirdCard/GirdCardBody";
import GridCardHeader from "../../components/GirdCard/GirdCardHeader";
import GridCard from "../../components/GirdCard/GridCard";
import GridList from "../../components/GridList/GridList";
import CardListItem from "../../components/ui/CardListItem";
import servicesBackGroundImage from '../../assets/servicesBackground.png'
import StrokeText from "../../components/StrokeText/StrokeText";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
export default function OurServicesSection() {
    const container = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'center bottom'
            }
        })
        tl.from('#card-1', { x: -50, opacity: 0, duration: .5 })
            .from('#card-2', { y: -50, opacity: 0 })
            .from('#card-3', { y: 50, opacity: 0 })
            .from('#card-4', { x: 50, opacity: 0 })
    }, { scope: container })
    return (
        <section className=" text-white bg-primary relative pb-16 z-[12] ">
            {/* overlay */}
            <img src={servicesBackGroundImage} className="h-full w-full absolute  z-10   object-cover grayscale opacity-5" alt="" />


            <StrokeText title="Our Services" />
            <div ref={container} className="mt-10">
                <GridList  >
                    <GridCard id="card-1" number={1} >
                        <GridCardHeader text="Domestic Ground Transport" />

                        <GridCardBody>
                            <CardListItem text="Modern carriers with hydraulic lift systems" />
                            <CardListItem text="City-to-city vehicle transportation" />
                        </GridCardBody>

                    </GridCard>

                    <GridCard id="card-2" number={2} >
                        <GridCardHeader text="International Vehicle Shipping" />

                        <GridCardBody>
                            <CardListItem text="Ocean and air freight options worldwide" />
                            <CardListItem text="Customs clearance assistance" />
                        </GridCardBody>

                    </GridCard>

                    <GridCard id="card-3" number={3} >
                        <GridCardHeader text="Luxury & Classic Car Transport" />

                        <GridCardBody>
                            <CardListItem text="White-glove service for high-value vehicles" />
                            <CardListItem text="Climate-controlled enclosed transport" />
                        </GridCardBody>

                    </GridCard>
                    <GridCard id="card-4" number={4} >
                        <GridCardHeader text="Heavy Equipment Shipping" />

                        <GridCardBody>
                            <CardListItem text="Trucks, construction equipment, buses" />
                            <CardListItem text="Specialized lowboy trailers" />
                        </GridCardBody>

                    </GridCard>
                </GridList>
            </div>
        </section>
    )
}