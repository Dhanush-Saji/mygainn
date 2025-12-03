
import { BsShop } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";
import { BiBarChartAlt2 } from "react-icons/bi";

const BestAppSection = () => {
    const list = [
        {title:'Franchisee',icons:<BsShop className="text-(--cblue) scale-150" />},
        {title:'Employee To Entrepreneur Program',icons:<IoPersonOutline className="text-(--cblue) scale-150" />},
        {title:'Digital Partner',icons:<PiHandshake className="text-(--cblue) scale-150" />},
        {title:'Channel Partner',icons:<LiaConnectdevelop className="text-(--cblue) scale-150" />},
        {title:'Remisier',icons:<BiBarChartAlt2 className="text-(--cblue) scale-150" />},
    ]
  return (
    <div className="businessModelSection flex flex-col gap-4 p-22">
        <div className="flex flex-col gap-1 items-center w-[80%] mx-auto">
            <h1 className="font-extrabold text-5xl">Business Models For An Authorized Person</h1>
            <h2 className=" text-lg mt-2 text-center">Our Approach Toward Our Authorised Person Is That Of Them Being An Extension Of Our Brand And An Extension If Our Family. All That We Seek From Our Authorised Person Are Unrelenting Passion For Growth. The Hunger For Scaling Up.</h2>
        </div>
        <div className="flex w-full">
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
        </div>
    </div>
  );
};

export default BestAppSection;