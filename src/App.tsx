import './App.css';
import landingBackgroundImage from './assets/Rectangle (1).jpg'
import Hero from './sections/hero/Hero';
import Navbar from './components/navbar/Navbar';
import OurServicesSection from './sections/ourServices/OurServicesSection';
import AboutUs from './sections/aboutUs/AboutUs';

function App() {


  return (
    <div className="App  ">
      {/* overlaies */}
      <div className='relative z-30'>
        <img src={landingBackgroundImage} className='absolute -z-10 grayscale object-cover object-center  h-screen w-full' alt="" />
        <div className='overlay  w-full h-screen z-[-1]  absolute top-0 left-0 bg-gradient-to-r from-[#151844]/90  to-primary/0 '></div>

        <Navbar />

        <Hero />
      </div>
      <div id='services' className='relative '>
        <OurServicesSection />
        <div className='w-32 md:w-64 h-24 md:h-32 border-2 border-r-0 border-b-0 border-secondrey absolute bottom-0 right-0 rounded-tl-[150px] z-30 '></div>
      </div>
      <div id='about' className='relative'>
        <div className='w-1/2 md:w-1/5 h-20 absolute left-0 -top-10 bg-transparent border-[2px] border-secondrey rounded-br-[150px] opacity-80  z-30'></div>
        <AboutUs />
      </div>
    </div >
  );
}

export default App;
