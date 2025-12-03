
import { BsShop } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";
import { BiBarChartAlt2 } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const BestAppSection = () => {
    const list = [
        {title:'Franchisee',icons:<BsShop className="text-(--cblue) scale-150" />},
        {title:'Employee To Entrepreneur Program',icons:<IoPersonOutline className="text-(--cblue) scale-150" />},
        {title:'Digital Partner',icons:<PiHandshake className="text-(--cblue) scale-150" />},
        {title:'Channel Partner',icons:<LiaConnectdevelop className="text-(--cblue) scale-150" />},
        {title:'Remisier',icons:<BiBarChartAlt2 className="text-(--cblue) scale-150" />},
    ]
  return (
    <div className="bg-(--cblue2) flex justify-between gap-4 w-[70%] mx-auto rounded-3xl overflow-hidden">
        <Image src={'/images/smartphone-img.png'} alt="img" width={300} height={300} className="relative -bottom-12 translate-x-12" />
        <div className="flex flex-col gap-6 w-[60%] mr-12 my-auto">
            <h1 className="font-extrabold text-5xl text-white">Business Models For An Authorized Person</h1>
            <div className="flex w-full bg-white p-2 rounded-lg">
                <input aria-label="Enter your mobile number" placeholder="Enter your mobile number" type="text" className="bg-white w-full p-2" />
                <button className="rounded-lg bg-(--cblue) text-white whitespace-nowrap font-semibold p-2">Send App Link</button>
            </div>
            <div className="flex">
                <Link target="_blank" href={'https://play.google.com/store/apps/details?id=com.xtrem.mygainn&pli=1'}>
                <Image src={'/images/playstore-qr.png'} alt="playstore" width={150} height={150} className="cursor-pointer mr-4"/>
                </Link>
                <Link target="_blank" href={'https://apps.apple.com/in/app/mygainn/id6446614166'}>
                <Image src={'/images/apple-qr.png'} alt="apple" width={150} height={150} className="cursor-pointer mr-4"/>
                </Link>
            </div>
      </div>
    </div>
  );
};

export default BestAppSection;