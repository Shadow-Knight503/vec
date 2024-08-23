import { useState, useEffect } from 'react'
import { EnvelopeIcon, PhoneIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import Sidebar from './SideBar'
import Nord from './assests/1723802229690.png'
import Naac from './assests/1723802229711.png'
import Acrd from './assests/1723802229732.png'
import Tnea from './assests/TNEA-Code.png'
import Inta from './assests/instagram.png'
import Fcbk from './assests/facebook.png'
import Twtr from './assests/twitter.png'
import Lknd from './assests/linkedin.png'
 // import { componentWillUnmount }

const Head = () => {
    const [scroll, setScroll] = useState(0)
    const [hdr, setHdr] = useState("h-20")

    const nacs = [Naac, Acrd,  Nord, Tnea]
    const hdrs = ["vec@kill.self.me", "+91 99566 00420"]
    const socls = [
        {Name: "Instagram", Link: "https://instagram.com", Ico: Inta},
        {Name: "Facebook", Link: "https://instagram.com", Ico: Fcbk},
        {Name: "Twitter", Link: "https://instagram.com", Ico: Twtr},
        {Name: "LinkedIn", Link: "https://instagram.com", Ico: Lknd},
    ]
    const navs = [
        {main: "Academics", sub: [{ttl: 'Bad Subjects', sup: [
                {ttl: 'Windows XP and how it works (CSE)', lnk: 'https://velammal.edu.in/'}, {ttl: 'Screwing Stuff ?! (Mech)', lnk: 'https://velammal.edu.in/'},
                {ttl: 'More IF loops please (AIDS, not the disease)', lnk: 'https://velammal.edu.in/'}, {ttl: 'CSE\'s lil brother (IT)', lnk: 'https://velammal.edu.in/'},
                {ttl: 'Something about sensors (ECE)', lnk: 'https://velammal.edu.in/'},
            ], lnk: ''}, {ttl: 'Useless Subjects', sup: [], lnk: 'https://velammal.edu.in/'}, 
            {ttl: 'Boring Subjects', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Broken Labs', sup: [], lnk: 'https://velammal.edu.in/'}, 
            {ttl: 'No Air Conditioning', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Back breaking academics', sup: [], lnk: 'https://velammal.edu.in/'}
        ]}, 
        {main: "Admissions", sub: [{ttl: 'Run', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'This is your', sup: [], lnk: 'https://velammal.edu.in/'},
            {ttl: 'Last Chance', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'RUNNNN!', sup: [], lnk: 'https://velammal.edu.in/'},
        ]}, 
        {main: "COE", sub: [{ttl: 'Student Login', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Staff Login', sup: [], lnk: 'https://velammal.edu.in/'}]}, 
        {main: "Placements", sub: [{ttl: '404 Not Found', sup: [], lnk: 'https://velammal.edu.in/'},]}, 
        {main: "Research", sub: [{ttl: 'Fake Experiments', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'AI generated papers', sup: [], lnk: 'https://velammal.edu.in/'},
            {ttl: 'Fudged Lab results', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Dusty Documents', sup: [], lnk: 'https://velammal.edu.in/'},
        ]}, 
        {main: "Torture", sub: [{ttl: 'Classes', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Subjects', sup: [], lnk: 'https://velammal.edu.in/'}, 
            {ttl: 'Management', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'College', sup: [], lnk: 'https://velammal.edu.in/'}
        ]}, 
        {main: "Boredom", sub: [{ttl: 'Lack of events', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Lack of activities', sup: [], lnk: 'https://velammal.edu.in/'},
            {ttl: 'Lack of free time', sup: [], lnk: 'https://velammal.edu.in/'}, {ttl: 'Lack of fun', sup: [], lnk: 'https://velammal.edu.in/'},
        ]}, 
        {main: "Hope Revial", sub: [{ttl: 'There\'s no hope', sup: [], lnk: 'https://velammal.edu.in/'}]}, 
    ]

    const hndlScrll = () => {
        const pos = window.scrollY
        const pos_thresh = 0
        console.log(pos)
        if (pos > pos_thresh) {setHdr("top-0")}
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
            <nav>
                <div className='flex font-comf bg-slate-800 p-[0.35rem] gap-3 z-10 w-full h-[2.5rem] text-slate-200'>
                    <EnvelopeIcon className='size-5 inline -mr-2 mb-1'></EnvelopeIcon><p className='truncate h-fit md:block hidden'>{hdrs[0]}</p>
                    <PhoneIcon className='size-5 inline -mr-2 mb-1'></PhoneIcon><p className='truncate h-fit md:block hidden'>{hdrs[1]}</p>
                    <div className='flex items-center justify-end grow gap-3'>
                        {socls.map((socl) => (
                            <a href={socl.Link}><img src={socl.Ico} alt={socl.Name} className='w-fit h-[1rem] invert'></img></a>
                        ))}
                    </div>
                </div>
                <div className={'flex items-center font-comf group bg-slate-200 z-[100] text-slate-200 transition-all ease-in-out duration-300 w-full h-auto fixed  ' + 
                        'rounded-b-lg border-b-2 border-slate-800 ' + hdr}>
                    <div className='bg-inherit z-10'>
                        <img src='https://res.cloudinary.com/meme-topia/image/upload/v1723784096/image-removebg-preview_ciglfw.png' alt='Vec Logo'
                            className='group-[.hide]:w-[2.5rem] group-[.hide]:h-[2.5rem] z-10 duration-300 ease-in-out transition-all w-[6.5vmax] h-auto'></img>
                    </div>    
                    <div className='w-fit h-auto grid grid-cols-1 gap-y-0 content-center relative group-[.hide]:-mt-1.5 duration-300 ease-out transition-all'>
                        <span className='font-rome text-[2vmax] text-amber-800 p-0 -mb-[0.75vmax]'>VELAMMAL</span>
                        <span className='font-rome text-black text-[1vmax] mt-0 p-0 transition-all ease-in-out duration-300'>ENGINEERING COLLEGE</span>
                    </div>
                    <div class="items-stretch relative h-max my-auto pb-2 group-[.hide]:-mt-2 lg:max-w-[17.5vw] max-w-[20.5vw] ml-2 sm:flex hidden">
                        {nacs.map((nac, i) => (
                            <div class="duration-200 self-center ease-linear" data-carousel-item>
                                <img src={nac} class="block max-h-[4vmax] mt-2 h-full w-auto p-1" alt="naac" key="naac" />
                            </div>
                        ))}
                    </div>
                    <div className='lg:flex flex-wrap hidden right-0 justify-end grow text-[1.3vmax] w-full max-w-[63.5%] w-fit h-max gap-x-4 gap-y-0
                        duration-300 ease-in-out transition'>
                        {/* <div className='flex group-[.hide]:text-xl place-content-end'> 
                        after:content-["*"] after:absolute after:-top-8 after:w-0 after:h-0 after:border-l-[1.5rem] 
                                        after:border-l-slate-600 after:border-t-[1.5rem] after:border-t-transparent after:border-b-[1.5rem] after:border-b-transparent 
                                        after:right-3 after:-rotate-90*/}
                            {navs.map((nvt) => (
                                <div className='group/nav relative transition-all'>
                                    <p className={`align-middle group-[.hide]:top-1 self-center w-fit p-[0.75vmin]
                                        hover:bg-[position:100%_0%] text-transparent
                                        bg-gradient-to-l from-amber-500 from-50% via-black via-50% to-black to-90% bg-clip-text bg-[position:0%_0%] bg-[length:200%_100%]
                                        hover:ease-out hover:duration-700 ease-in-out duration-300`}>{nvt.main}
                                        <ChevronDoubleDownIcon className='size-[1.3vmax] mb-1 ml-1 inline text-black'></ChevronDoubleDownIcon></p>  
                                    <div className={`grid grid-flow-row rounded-lg bg-slate-200 outline group-hover/nav:outline-yellow-600 
                                        outline-transparent right-0 top-10 w-fit h-fit absolute group-hover/nav:max-h-[70vh] max-h-0 h-fit w-fit bg-slate-600 outline-offset-2
                                        group-hover/nav:w-fit duration-500 ease-in transiton-[ht]`} style={{clipPath: 'inset( -100vw -100vw -100vw -0.25vw )'}}>
                                            {nvt.sub.map((sbj, i, { length }) => (
                                                <div className='group/sub relative'>
                                                    <a className={`no-underline inline-block bg-[length:200%_100%] bg-[position:0%_100%] text-slate-200 -translate-x-[20vw] px-2 rounded-lg
                                                        ${( i !== length - 1) ? 'border-b': ''} bg-gradient-to-l from-amber-600 from-0% via-amber-600 via-50% to-slate-600 to-50% 
                                                        w-full group-hover/nav:translate-x-0 z-[500] duration-300 ease-in transition-all hover:bg-[position:-100%_100%]`} 
                                                        style={{transitionDelay: `${100 * i}ms`}} 
                                                        key={sbj.ttl} href={sbj.lnk}><p className='w-fit my-2 text-right align-middle text-nowrap'>{sbj.ttl}</p></a>
                                                    <div className={`grid grid-flow-row rounded-lg bg-slate-200 outline group-hover/sub:outline-yellow-600 outline-transparent 
                                                        -right-[57.5%] top-0 absolute group-hover/sub:max-h-[70wh] z-[-100] max-h-0 h-fit w-fit bg-slate-600 outline-offset-2
                                                        duration-500 ease-in transiton-[ht]`}>
                                                            {sbj.sup.map((spj, i, { length }) => (
                                                                <div>
                                                                    <a className={`no-underline inline-block bg-[length:200%_100%] bg-[position:0%_100%] text-slate-200 -translate-x-[30vw] px-2 
                                                                        ${( i !== length - 1) ? 'border-b': ''} bg-gradient-to-l from-amber-600 from-0% via-amber-600 via-50% to-slate-600 to-50% 
                                                                        w-full group-hover/sub:translate-x-0 duration-300 ease-in transition-all hover:bg-[position:-100%_100%]`} 
                                                                        style={{transitionDelay: `${100 * i}ms`}} 
                                                                        key={spj.ttl} href={spj.lnk}><p className='w-fit my-2 text-right align-middle text-nowrap'>{sbj.ttl}</p></a>
                                                                    
                                                                </div>
                                                            ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        {/* </div> */}
                    </div>
                </div>
                <div className='block lg:hidden mt-[2vmax] duration-300 ease-in-out transition-all size-12 border-black m-3 h-fit rounded-md'>
                    <Sidebar Sz={((hdr === "h-20") ? "fll": "tny p-0")} /></div>        
            </nav>
        </> 
    )
}


export default Head;