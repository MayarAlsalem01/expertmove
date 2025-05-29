export default function StrokeText({ title }: { title: string }) {
    const t = title.split(' ')
    return (
        <div className="pt-10 ">
            <div id="section-header " className="stroke-text pl-3 md:pl-24 relative  ">
                <h2 className="text-4xl md:text-7xl font-AeonikTRIALBold relative z-40 ">{t[0]} <span className="block -mt-4 lg:-mt-7 text-secondrey ">{t[1]}</span></h2>
                <div className=" absolute top-3 md:top-2 left-5 md:left-28 ">
                    <p className=" text-5xl md:text-8xl font-AeonikTRIALBold bg-blend-lighten stroke opacity-30 ">{t[0]} <span className="block -mt-9 md:-mt-16 text-secondrey ">{t[1]}</span></p>
                </div>

            </div>
        </div>
    )
}