import { GlowingEffect } from "../ui/glowing-effect";

const AllInvestmentSection = () => {
    const list = [
        { title: 'Stocks' },
        { title: 'Mutual Funds' },
        { title: 'IPO' },
        { title: 'Futures and Options' },
        { title: 'MCX' },
    ]
    return (
        <div className="flex flex-col gap-8 p-22 bg-(--cblue2)">
            <h1 className="font-extrabold text-5xl mx-auto text-white">All Your Investments Need In One Place</h1>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-4">
                {
                list.map((item, index) => (
                    <GridItem key={index}
                    // icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title={item?.title}
                />
                    // <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 w-full min-h-40" key={index}>
                    //     <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full"></div>
                    //     <h2 className="font-bold text-2xl">{item.title}</h2>
                    // </div>
                ))
            }
            </ul>
            {/* <div className="grid grid-cols-3 mt-16 gap-8 px-12">
            {
                list.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 w-full min-h-40" key={index}>
                        <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full"></div>
                        <h2 className="font-bold text-2xl">{item.title}</h2>
                    </div>
                ))
            }
        </div> */}
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