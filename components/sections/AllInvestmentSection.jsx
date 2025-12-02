
const AllInvestmentSection = () => {
    const list = [
        {title:'Stocks'},
        {title:'Mutual Funds'},
        {title:'IPO'},
        {title:'Futures and Options'},
        {title:'MCX'},
    ]
  return (
    <div className="flex flex-col gap-4 p-22 bg-(--cblue2)">
        <h1 className="font-extrabold text-5xl mx-auto text-white">All Your Investments Need In One Place</h1>
        <div className="grid grid-cols-3 mt-16 gap-8 px-12">
            {
                list.map((item, index) => (
                    <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 w-full min-h-40" key={index}>
                        <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full"></div>
                        <h2 className="font-bold text-2xl">{item.title}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default AllInvestmentSection;