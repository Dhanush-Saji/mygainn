'use client';
import { LockKeyhole } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
    const handleFn = (e) => {
             event.preventDefault();
             document.getElementById("popupLiveRegion").innerText = "Your popup has been opened. Please fill the form.";

    };
    return (
        <div className="bg-(--cblue1) flex flex-col pt-32 pb-20">
            <div className="flex flex-col absolute left-20 top-1/2 -translate-y-1/2 gap-2 w-[30%] z-[2]">
                <h2 tabIndex={1} className="text-(--corange) font-bold">GAINNFINTECH</h2>
                <h1 tabIndex={1} className="font-extrabold text-5xl">Invest Right</h1>
                <h2 tabIndex={1} className="font-bold text-2xl">Why Are We Different From Others?</h2>
            </div>
            <div className="relative">
                <Image src={'/images/hero-image.png'} alt="Hero Image" width={1200} height={1000} className="mx-auto" />
                <div className="flex shadow-lg bg-white items-center p-4 gap-4 font-bold max-w-[20%] absolute z-[2] top-0 left-[35%] rounded-lg -translate-x-1/2">
                    <div className="flex items-center justify-center bg-(--cblue1) relative p-2 rounded-xl">
                        <LockKeyhole className="text-(--cblue) scale-100" />
                    </div>
                    <p>Maximum Security so you can trade without stress</p>
                </div>
                <div className="flex shadow-lg bg-white items-center p-4 gap-4 font-bold max-w-[25%] absolute z-[2] top-[10%] left-[75%] rounded-lg -translate-x-1/2">
                    <div className="flex items-center justify-center bg-(--cblue1) relative p-2 rounded-xl">
                        <LockKeyhole className="text-(--cblue) scale-100" />
                    </div>
                    <p>Lowest* per order on Equity, F&O, Commodity and Currency</p>
                </div>
                <div className="flex shadow-lg bg-white items-center p-4 gap-4 font-bold max-w-[20%] absolute z-[2] bottom-[12%] left-[65%] rounded-lg -translate-x-1/2">
                    <div className="flex items-center justify-center bg-(--cblue1) relative p-2 rounded-xl">
                        <LockKeyhole className="text-(--cblue) scale-100" />
                    </div>
                    <p>Free account opening</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 bg-white w-[70%] mx-auto p-4 py-4 rounded-lg shadow-lg">
                <form onSubmit={handleFn} role="form" className="flex justify-between gap-2 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold" htmlFor="name">Name</label>
                        <input aria-label="Enter your name here" id="name" type="text" className="bg-white border w-full rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold" htmlFor="name">Email</label>
                       <input aria-label="Enter your Email here" type="text" className="bg-white border w-full rounded-md p-2" />
                    </div>
                <button type="submit" aria-label="Click to start" className="bg-(--cblue2) text-white py-3 px-4 h-fit mt-auto whitespace-nowrap rounded-lg text-sm font-semibold w-fit ml-auto">Get Started</button>
                </form>
            </div>
            <div aria-live="assertive" aria-atomic="true" className="sr-only" id="popupLiveRegion"></div>
        </div>
    );
};

export default HeroSection;