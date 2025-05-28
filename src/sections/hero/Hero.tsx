import orange from '../../assets/Group.png'

export default function Hero() {
    return (
        <section className=' w-full h-[calc(100vh-5rem)] flex justify-between pl-3 lg:pl-24  relative z-10 '>
            <div className='flex flex-col justify-center items-start  text-white 400 '>
                <div>
                    <p className='font-AeonikTRIALBoldItalic text-3xl md:text-6xl'>Driven by trust.</p>
                    <p className=' font-serif font-normal text-3xl md:text-6xl text-secondrey pl-0.5 -mt-5 md:-mt-6'>Delivered with prestige.</p>
                </div>
                <div className='mt-4'>
                    <p className='w-full md:w-[90vh] font-AeonikTRIALRegular text-base md:text-xl'>Welcome to Expermove, the leading vehicle transport and shipping specialist. We provide end-to-end solutions for domestic and international car shipping, handling everything from personal vehicles to classic cars and heavy machinery with absolute professionalism.</p>
                </div>
                <div className='mt-8'>
                    <button className='px-12 py-3 bg-secondrey rounded-tl-3xl rounded-br-3xl'>Contact Us</button>
                </div>
            </div>

            <div>
            </div>
            <div className='hidden md:flex h-full basis-2/3 md:basis-auto pt-20   justify-end  '>
                <img src={orange} className=' max-h-full  opacity-40  ' alt="" />

            </div>
        </section>
    )
}