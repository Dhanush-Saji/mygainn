import { getCommonApi } from "@/lib/api";
import BlogCard from "../cards/BlogCard";


const LatestBlogSection = async() => {
    const blogList = await getCommonApi('https://api.npoint.io/3b60063da7d6739c46a0')
    return (
        <div className={"flex flex-col gap-8 items-center px-20 py-12 mt-12"}>
            <div className="flex flex-col gap-5">
                <p className=" font-bold text-3xl md:text-3xl">Our Latest Blogs</p>
           </div>
           <div className="grid grid-cols-3 gap-8 w-full">
           {
            blogList?.list?.map((item,index)=>(
                <BlogCard item={item} key={index} />
            ))
           }
           </div>
        </div>
    );
};

export default LatestBlogSection;