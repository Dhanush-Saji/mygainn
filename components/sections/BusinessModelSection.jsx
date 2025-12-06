
import { BsShop } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";
import { BiBarChartAlt2 } from "react-icons/bi";
import './BusinessModelSection.css'
import { CometCard } from "../ui/comet-card";
import Image from "next/image";

const BusinessModelSection = () => {
    const list = [
        { title: 'Franchisee', icons: <BsShop className="text-(--cblue) scale-150" /> },
        { title: 'Employee To Entrepreneur Program', icons: <IoPersonOutline className="text-(--cblue) scale-150" /> },
        { title: 'Digital Partner', icons: <PiHandshake className="text-(--cblue) scale-150" /> },
        { title: 'Channel Partner', icons: <LiaConnectdevelop className="text-(--cblue) scale-150" /> },
        { title: 'Remisier', icons: <BiBarChartAlt2 className="text-(--cblue) scale-150" /> },
    ]
    return (
        <div className="businessModelSection flex flex-col items-center gap-15 p-22 ">
            <div className="flex flex-col gap-1 items-center w-[80%] mx-auto">
                <h1 className="font-extrabold text-5xl">Business Models For An Authorized Person</h1>
                <h2 className=" text-lg mt-2 text-center">Our Approach Toward Our Authorised Person Is That Of Them Being An Extension Of Our Brand And An Extension If Our Family. All That We Seek From Our Authorised Person Are Unrelenting Passion For Growth. The Hunger For Scaling Up.</h2>
            </div>
            <div className="flex w-[70%] justify-between">
                <div className="flex flex-col gap-6">
                    {
                        list.map((item, index) => (
                            <div className="flex gap-4 items-center" key={index}>
                                <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full">
                                    {item?.icons}
                                </div>
                                <p className="text-2xl font-semibold">{item?.title}</p>
                            </div>
                        ))
                    }
                </div>
                <CometCard>
                    <button
                        type="button"
                        className="flex w-50 cursor-pointer flex-col  saturate-0 "
                        aria-label="View invite F7RA"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "none",
                            opacity: 1,
                        }}
                    >
                         <div className="relative aspect-[3/4] w-full">
                                <img
                                    loading="lazy"
                                    className="absolute  contrast-95"
                                    alt="Invite background"
                                    src="/images/phone-mock.png"
                                    fill
                                />
                            </div>
                    </button>
                </CometCard>
            </div>
        </div>
    );
};

export default BusinessModelSection;