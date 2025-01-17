import video1 from '../assets/profile-pictures/video1.mp4'
import video2 from '../assets/profile-pictures/video2.mp4'

export default function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide '>
            Virtual build tools 
            <span className='bg-gradient-to-r  from-orange-500 to-orange-900 text-transparent bg-clip-text'>{" "}for developer</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 mx-w-4xl'>
        Revolutionizing the way we interact with digital environments,offers immersive experiences that can enhance productivity.
        </p>
        <div className="flex justify-center my-10">
            <a href="" className='bg-gradient-to-r from-orange-500 to-orange-900 py-3 px-4 mx-3 rounded-md' >
                Start for free
            </a>
            <a href="" className='border py-3 px-4 mx-3 rounded-md' >
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay muted loop className='rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' >
              <source src={video1} type='video/mp4'/>
            </video>
            <video autoPlay muted loop className='rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' >
              <source src={video2} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}
