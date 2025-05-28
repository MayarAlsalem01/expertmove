import GridCardBody from "../../components/GirdCard/GirdCardBody";
import GridCardHeader from "../../components/GirdCard/GirdCardHeader";
import GridCard from "../../components/GirdCard/GridCard";
import GridList from "../../components/GridList/GridList";
import CardListItem from "../../components/ui/CardListItem";
import servicesBackGroundImage from '../../assets/servicesBackground.png'
import StrokeText from "../../components/StrokeText/StrokeText";

export default function OurServicesSection() {
    return (
        <section className=" text-white bg-primary relative pb-16 z-[12] ">
            {/* overlay */}
            <img src={servicesBackGroundImage} className="h-full w-full absolute  z-10   object-cover grayscale opacity-5" alt="" />


            <StrokeText title="Our Services" />
            <div className="mt-10">
                <GridList >
                    <GridCard number={1} >
                        <GridCardHeader text="Domestic Ground Transport" />

                        <GridCardBody>
                            <CardListItem text="Modern carriers with hydraulic lift systems" />
                            <CardListItem text="City-to-city vehicle transportation" />
                        </GridCardBody>

                    </GridCard>

                    <GridCard number={2} >
                        <GridCardHeader text="International Vehicle Shipping" />

                        <GridCardBody>
                            <CardListItem text="Ocean and air freight options worldwide" />
                            <CardListItem text="Customs clearance assistance" />
                        </GridCardBody>

                    </GridCard>

                    <GridCard number={3} >
                        <GridCardHeader text="Luxury & Classic Car Transport" />

                        <GridCardBody>
                            <CardListItem text="White-glove service for high-value vehicles" />
                            <CardListItem text="Climate-controlled enclosed transport" />
                        </GridCardBody>

                    </GridCard>
                    <GridCard number={4} >
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