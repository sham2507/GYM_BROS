import Button from "./Templates/Button.jsx";

/* eslint-disable react/no-unescaped-entities */
export default function Hero({terms}){    
    return(
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">            
            <div className="flex flex-col gap-4">
                <p className="uppercase">Let's see</p>
                <h1 className="uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">what you are <span className="text-red-700 redShadow">made of</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button text="Accept by Double-click" onClick={terms}/>
        </div>
    );
}