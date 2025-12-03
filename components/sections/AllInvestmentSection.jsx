import { GlowingEffect } from "../ui/glowing-effect";
import { GrPieChart } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { GiCycle, GiGoldBar } from "react-icons/gi";
import './AllInvestmentSection.css'

const AllInvestmentSection = () => {
    const list = [
        { title: 'Stocks',icon:<FaChartLine className="text-(--cblue) scale-150" /> },
        { title: 'Mutual Funds',icon:<GrPieChart className="text-(--cblue) scale-150" /> },
        { title: 'IPO',icon:<MdOutlineRocketLaunch className="text-(--cblue) scale-150" /> },
        { title: 'Futures and Options',icon:<GiCycle className="text-(--cblue) scale-150" /> },
        { title: 'MCX',icon:<GiGoldBar className="text-(--cblue) scale-150" /> },
    ]
    return (
        <div className="allInvestmentSection flex flex-col gap-8 p-22 bg-(--cblue2)">
            <h1 className="font-extrabold text-5xl mx-auto text-white">All Your Investments Need In One Place</h1>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-4">
                {
                list.map((item, index) => (
                    <GridItem key={index}
                    icon={item?.icon}
                    title={item?.title}
                />
                ))
            }
            </ul>
        </div>
    );
};

export default AllInvestmentSection;

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={` list-none ${area}`}>
      <div className="relative h-full rounded-2xl border md:rounded-3xl bg-white">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-col justify-between gap-3">
            <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full">
              {icon}
            </div>
            <div className="">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              {/* <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};