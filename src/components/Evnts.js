const Evnt = () => {
    const evn = [{
        name: "Huhu", descrp: "Gygyusdygeyau", sdate: "34de", edate:"23 dec", dept: "Civil"  
    }]

    return (
        <>
            <div className='flex font-comf p-4'>
                {evn.map((evt)=>(
                    <div className='bg-slate-400 border-radius p-4 w-[15vw] h-[25vh] mt-5 relative'>
                        <div className='rounded-full bg-slate-100 size-[5rem] -top-[1.5rem] left-[32.5%] absolute'>
                            <div className='rounded-full p-4 size-[4.5rem] bg-slate-800 ml-1 mt-1 text-slate-200'>{evt.sdate}</div>
                        </div>
                        <p className="mt-12 text-xl">{evt.descrp}</p>
                        <div className="bg-slate-600 text-slate-200 absolute w-full right-0 text-xl top-[65%] p-2">{evt.dept}</div>
                    </div>
                ))}
            </div>
        </> 
    )
}

export default Evnt;