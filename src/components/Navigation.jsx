import React, {useState} from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion"

function Navigation() {
  const [modal, setModal] = useState(false);

  const modalShow = () => {
    setModal(true)
  };
  const modalOff = () => {
    setModal(false)
  };
  return (
    <nav className='py-6 center justify-between'>
      <div className='center gap-1'>
        <img className='sm:w-16 sm:h-16 w-12 h-12' src={require("../assets/img/icon.png")} alt="" />
        <h4 className='font-bold sm:text-2xl text-xl text-[#0F2137]'>Qully</h4>
      </div>
      <button onClick={modalShow} className='sm:py-3 sm:px-6 py-2 px-5 rounded-full bg-[#6B9EFF] hover:bg-[#6B9EFF]/80 transition-all duration-300 text-white font-semibold sm:text-base text-sm'>About us</button>

      {/* Modal popup */}
      <AnimatePresence>
      {modal && <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{ opacity: 0 }} className="flex justify-end fixed z-[99] top-0 left-0 overflow-auto w-screen h-screen bg-black/50">
        <RiCloseCircleLine onClick={modalOff} className='absolute cursor-pointer top-5 z-[9999] right-5 sm:text-4xl text-3xl text-[#6D7480]' />
        <div className='2xl:w-[40%] lg:w-[60%] sm:p-16 py-8 px-4 bg-white lg:h-[900px] sm:h-[850px] h-[1200px]'>
          <h1 className='sm:mb-10 mb-6 text-2xl font-bold text-black text-center'>Meet about us</h1>
          <p className='mb-10 text-base leading-8'><span className=' font-bold sm:text-5xl text-3xl'>W</span>e are always been a focus for being as a company and undoubtedly has made the tool what it is today. Our employees, alongside committed community members, have jumped in and helped others tackle complex prototyping problems or quickly get up to speed with interactive design. We’ve shared, shaped, and riffed on everything from powerful components to fully realized design systems within the community.</p>
          <h1 className='sm:mb-10 mb-6 text-2xl font-bold text-black text-center'>Drop your message</h1>
          <form className='grid grid-cols-2 gap-5' action="#">
            <div className='col-span-2 sm:col-span-1'>
              <label className=' text-base font-medium mb-3 block'>Full Name</label>
              <input className='sm:py-5 sm:px-6 py-4 px-5 w-full border-[1px] border-[#D4DCE9] text-black opacity-70 rounded-full bg-white outline-none' type="text" name="name" id="name" placeholder='Ex: John Doe'/>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <label className=' text-base font-medium mb-3 block'>Email Address</label>
              <input className='sm:py-5 sm:px-6 py-4 px-5 w-full border-[1px] border-[#D4DCE9] text-black opacity-70 rounded-full bg-white outline-none' type="email" name="email" id="email" placeholder='Ex: John Doe'/>
            </div>
            <div className='col-span-2'>
              <label className=' text-base font-medium mb-3 block'>Describetion</label>
              <textarea className='sm:py-5 sm:px-6 py-4 px-5 w-full border-[1px] border-[#D4DCE9] text-black opacity-70 rounded-2xl  bg-white outline-none' placeholder='Describe your message here'/>
            </div>
            <div className='col-span-2 text-center'>
              <button className='sm:py-5 sm:px-6 py-4 px-5 rounded-full bg-[#6B9EFF] hover:bg-[#6B9EFF]/80 transition-all duration-300 text-white font-semibold font-base'>Send Message</button>
            </div>
          </form>
        </div>
      </motion.div>}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation