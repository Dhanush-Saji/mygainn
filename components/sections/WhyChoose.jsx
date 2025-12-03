import Link from "next/link";
import { Highlighter } from "../ui/highlighter";
import { IoAnalyticsSharp } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { TbChartBar } from "react-icons/tb";

const WhyChoose = () => {
    const chooseList = [
        {
            title:'Funds Offerings',des:`Discover, analyse, and invest with ease using Mygainn’s Funds Offerings. Our platform provides smart lists and smart filters, allowing you to search stocks effortlessly. Start exploring the world of investing today!`,url:'/invest',linkText:'Start Investing',icon:<IoAnalyticsSharp className="text-(--cblue) scale-150" />
        },
        {
            title:'MTF',des:`Make informed investment decisions with the tools and resources provided by MTF. Whether you are a seasoned trader or just starting out, our platform empowers you to navigate the market confidently.`,url:'/mtf',linkText:'Get Started',icon:<BsGraphUp className="text-(--cblue) scale-150" />
        },
        {
            title:'Trading + 5',des:`Our platform simplifies the stock-searching process, making it quick and efficient. Analyse stock charts and access comprehensive company information to gain valuable insights`,url:'/trade',linkText:'Start Trading',icon:<TbChartBar className="text-(--cblue) scale-150" />
        },
    ]
  return (
    <div className="flex flex-col gap-4 p-22">
        <div className="flex flex-col gap-1 items-center">
            <h2 className="text-(--corange) font-bold uppercase">benefits</h2>
            <h1 className="font-extrabold text-5xl">Why Choose 
                <Highlighter action="underline" color="#FF9800">
                    MyGainn?
                </Highlighter>
                </h1>
            <h2 className="font-semibold text-2xl mt-2">Choose Excellence, Experience, and Results</h2>
        </div>
        <div className="grid grid-cols-3 mt-16 gap-8">
            {
                chooseList.map((item, index) => (
                    <div className="flex flex-col gap-2" key={index}>
                        <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full">
                            {item.icon}
                        </div>
                        <h2 className="font-bold text-2xl">{item.title}</h2>
                        <p>{item.des}</p>
                        <Link href={item.url} className="text-(--corange) font-semibold">{item.linkText}</Link>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default WhyChoose;