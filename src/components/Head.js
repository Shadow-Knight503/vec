import { useState, useEffect } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Sidebar from './SideBar'
// import { componentWillUnmount }

const Head = () => {
    const [scroll, setScroll] = useState(0)
    const [hdr, setHdr] = useState("h-20")

    const hdrs = ["More", "Less", "Why the College stinks", "Upsides vs Downsides", "Last one ?", "Nah kidding"]
    const navs = ["Academics", "Admissions", "COE", "Placements"]

    const hndlScrll = () => {
        const pos = window.scrollY
        const pos_thresh = 0
        console.log(pos)
        if (pos > pos_thresh) {setHdr("h-12 hide")}
        else {setHdr("h-20")} 
        setScroll(pos)
    }

    useEffect(() => {
        window.addEventListener('scroll', hndlScrll, {passive: true})

        return () => {
            window.removeEventListener('scroll', hndlScrll)
        }
    })
    return (
        <>
            {/* <div className='flex font-comf bg-slate-800 rounded-b-lg p-[0.35rem] gap-3 z-10 w-full h-[2.5rem] text-slate-200 fixed'>
                <p className='truncate w-fit'><EnvelopeIcon className='size-5 inline mr-1 mb-1'></EnvelopeIcon>Vec@mail.edu.in</p>
                <p className='truncate mr-[25vw]'><PhoneIcon className='size-5 inline mr-1 mb-1'></PhoneIcon>+91 99456 69420</p>
                    <div className='flex gap-3'>
                    {hdrs.map((txt, i, { length }) => (
                        <p className={'self-end pr-3 mb-1 ' + (( i !== length - 1) ? 'after:content-[""] after:border-r-2 after:h-[50%] after:inline after:pr-6': '')} key={i}>{txt}</p>
                    ))}
                    </div>
            </div> */}
            <nav className={'flex font-comf group bg-slate-200 z-[100] text-slate-200 transition-all ease-in-out duration-300 w-full fixed ' + 
                    'rounded-b-lg border-b-2 border-slate-800 ' + hdr}>
                <div className='bg-inherit z-10 justify-self-start'>
                    <img src='https://res.cloudinary.com/meme-topia/image/upload/v1723784096/image-removebg-preview_ciglfw.png' alt='Vec Logo'
                        className='group-[.hide]:w-[2.5rem] group-[.hide]:h-[2.5rem] z-10 duration-300 ease-in-out transition-all w-[5rem] h-[5rem]'></img>
                </div>    
                <div className='grid grid-rows-1 ml-2 mr-[25vw] group-[.hide]:-translate-x-[20vw] duration-500 ease-out transition-all'>
                    <p className='mt-3 font-rome text-2xl text-amber-800'>VELAMMAL</p>
                    <p className='font-rome text-black text-xs'>ENGINEERING COLLEGE</p>
                </div>
                <div className='flex-1 mr-8'>
                    <div className='flex group-[.hide]:text-lg transition-all text-2xl justify-end h-full gap-4'>
                        {navs.map((nvt) => (
                            <p className='text-slate-950 pt-2 align-middle relative text-center self-center my-auto inline border w-fit px-4 hover:after:scale-y-100 
                                bg-slate-300 min-h-full flex-end after:content-[""] after:absolute after:w-full after:h-full after:origin-bottom after:scale-y-0 after:bg-amber-500
                                after:-z-10 z-10 after:left-0 after:bottom-0 after:duration-300 after:transition-all after:ease-in duration-300 transition-all'>{nvt}</p>
                        ))}
                    </div>
                </div>
                
                <div className='group-[.hide]:size-5 duration-300 ease-in-out transition-all size-12 border-black m-3 h-fit rounded-md'>
                <Sidebar Sz={((hdr === "h-20") ? "fll": "tny p-0 -mt-4")} /></div>        
            </nav>
        </> 
    )
}


export default Head;