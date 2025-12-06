import Image from "next/image";
import Link from "next/link";

const BlogCard = ({item}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <div className="relative w-full h-40">
            <Image src={item?.img} fill className="absolute object-cover rounded-xl"  alt="blog" />
        </div>
        <div className="text-xs text-white bg-(--cblue) w-fit rounded-full px-1.5 py-1">{item?.date}</div>
        <p className="font-bold text-lg ">{item?.title}</p>
         <p className="line-clamp-4">{item?.des}</p>
         <Link href={`/blog/${item?.id}`} className="text-(--cblue) mt-auto font-bold">Read more</Link>
    </div>
  );
};

export default BlogCard;