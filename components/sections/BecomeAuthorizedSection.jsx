import Link from "next/link";

const BecomeAuthorizedSection = () => {
    const chooseList = [
        {
            title: 'Drop your contact information', image: ''
        },
        {
            title: 'Complete The E-AP Registration', image: ''
        },
        {
            title: 'Upload your documents and await approval', image: ''
        },
    ]
    return (
        <div className="flex flex-col gap-4 p-22">
            <div className="flex flex-col gap-1 items-center">
                <h1 className="font-extrabold text-5xl">Become An Authorised Person</h1>
                <h2 className="font-extrabold text-2xl">In Just 3 Steps</h2>
            </div>
            <div className="grid grid-cols-3 w-full mt-8">
                {
                    chooseList.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                            <div className="flex justify-center items-center w-14 h-14 bg-(--cblue1) rounded-full">

                            </div>
                            <h3 className="-tracking-4 text-center text-sm font-medium text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {item?.title}
                            </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BecomeAuthorizedSection;