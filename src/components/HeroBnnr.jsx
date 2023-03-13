import React, {useEffect, useState} from 'react'
import { RiArrowRightSLine,RiMailLine } from "react-icons/ri";

function HeroBnnr() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadLine = 'april, 30, 2023';
  const getTime = () => {
    const time = Date.parse(deadLine)-Date.now();
    setDays(Math.floor(time/(1000*60*60*24)));
    setHours(Math.floor(time/(1000*60*60)%24));
    setMins(Math.floor((time/1000/60)%60));
    setSecs(Math.floor((time/1000)%60)); 
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(),1000);
    return ()=> clearInterval(interval)
  },[])
  return (
    <section className='center flex-col lg:flex-row justify-between'> 
      <div className='2xl:w-[48%] lg:w-[50%] w-full py-8 sm:py-16 lg:py-0'>
        <div className='center mb-4 gap-2 py-1.5 pl-1.5 sm:pr-4 pr-1.5 rounded-full bg-white w-fit shadow-lg shadow-gray-100 overflow-hidden'>
          <span className='text-sm py-1 px-2.5 font-semibold rounded-full text-white bg-[#6B9EFF] hidden sm:block'>NEWS</span>
          <p className='center gap-1 whitespace-nowrap text-[#02073E] text-sm'>We are also working on our iOS app development <RiArrowRightSLine className='text-base hidden sm:block'/></p>
        </div>
        <h1 className='secondary_font 2xl:text-6xl sm:text-5xl text-4xl font-bold 2xl:leading-[75px] md:leading-[65px] sm:leading-[60px] leading-[50px] mb-5'>Our site is on working. We are sorry for your inconvenience.</h1>
        <p className='md:text-lg text-base text-black sm:leading-10 leading-8 opacity-70 2xl:w-[72%] w-full'>We have been spending long hours in order to launch our new website. Join our mailing list or follow us on Facebook or Twitter to stay up to date. </p>
        <form className='xl:mt-8 mt-6 center md:items-center items-end flex-col md:flex-row gap-4 md:gap-0' action="#">
          <div className='relative w-full md:w-fit'>
          <input className='2xl:py-5 py-4 pl-12 2xl:pr-6 pr-5 md:mr-4 mr-0 xl:w-96 lg:w-72 md:w-96 w-full text-black opacity-70 rounded-full bg-white outline-none shadow-xl shadow-slate-200' type="email" name="email" id="email" placeholder='Enter email address'/>
          <RiMailLine className='absolute 2xl:top-5 top-4 left-4 text-2xl text-[#152630] opacity-40'/>
          </div>
          <button className='2xl:py-5 py-4 2xl:px-6 px-5 rounded-full bg-[#6B9EFF] hover:bg-[#6B9EFF]/80 transition-all duration-300 text-white font-semibold sm:text-base text-sm'>NOTIFY ME</button>
        </form>
      </div>
      <div className='2xl:w-[52%] lg:w-[50%] w-full flex 2xl:justify-center flex-col sm:flex-row lg:justify-end justify-center items-center sm:gap-10 gap-5 py-6 lg:py-0'>

        <div className='w-full sm:w-fit'>
          <div className='2xl:w-64 2xl:h-64 sm:w-56 w-full h-56 sm:mb-10 mb-5 bg-white shadow-xl shadow-slate-200 rounded-[10px] flex flex-col justify-center items-center gap-2'>
            <h2 className=' 2xl:text-7xl sm:text-6xl text-5xl font-semibold text-gray-800'>{days < 10 ? "0"+days: days }</h2>
            <p className=' text-xl font-bold text-black opacity-50'>DAY</p>
          </div>
          <div className='2xl:w-64 2xl:h-64 sm:w-56 w-full h-56 bg-white shadow-xl shadow-slate-200 rounded-[10px] flex flex-col justify-center items-center gap-2'>
            <h2 className=' 2xl:text-7xl sm:text-6xl text-5xl font-semibold text-gray-800'>{hours < 10 ? "0"+hours: hours }</h2>
            <p className=' text-xl font-bold text-black opacity-50'>HOUR</p>
          </div>
        </div>

        <div className='lg:mt-20 mt-0 w-full sm:w-fit'> 
          <div className='2xl:w-64 2xl:h-64 sm:w-56 w-full h-56 sm:mb-10 mb-5 bg-white shadow-xl shadow-slate-200 rounded-[10px] flex flex-col justify-center items-center gap-2'>
            <h2 className=' 2xl:text-7xl sm:text-6xl text-5xl font-semibold text-gray-800'>{mins < 10 ? "0"+mins: mins }</h2>
            <p className=' text-xl font-bold text-black opacity-50'>MIN</p>
          </div>
          <div className='2xl:w-64 2xl:h-64 sm:w-56 w-full h-56 bg-white shadow-xl shadow-slate-200 rounded-[10px] flex flex-col justify-center items-center gap-2'>
            <h2 className=' 2xl:text-7xl sm:text-6xl text-5xl font-semibold text-gray-800'>{secs < 10 ? "0"+secs: secs }</h2>
            <p className=' text-xl font-bold text-black opacity-50'>SEC</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBnnr