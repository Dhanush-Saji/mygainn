import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const TestimonialSection = () => {
    const list = [
        {name:'Pritesh Sha',job:'Solution Architect at Amazon Web Services',comment:`Great trading experience with a user-friendly platform offering a variety of stock analysis tools, including smart lists and filters for easy stock search.`},
        {name:'Mahesh Doshi',job:'Solution Architect at Amazon Web Services',comment:`Mygainn's intuitive platform, comprehensive tools, real-time updates, and responsive customer support make them highly recommended for traders of all levels.`},
        {name:'Pritesh Sha',job:'Solution Architect at Amazon Web Services',comment:`I had a great experience with Mygainn. They provide seamless trading with advanced features and responsive customer support.`},
        {name:'Pritesh Sha',job:'Solution Architect at Amazon Web Services',comment:`I had a great experience with Mygainn. They provide seamless trading with advanced features and responsive customer support.`},
        {name:'Pritesh Sha',job:'Solution Architect at Amazon Web Services',comment:`I had a great experience with Mygainn. They provide seamless trading with advanced features and responsive customer support.`},
        {name:'Pritesh Sha',job:'Solution Architect at Amazon Web Services',comment:`I had a great experience with Mygainn. They provide seamless trading with advanced features and responsive customer support.`},
    ]
    return (
        <div id="testimonials" className={"flex flex-col md:gap-4 relative justify-center pl-5 md:pl-10 py-4 md:py-12 pt-4 md:pt-24"}>
            <div className="flex flex-col md:max-w-[35%] gap-5">
                <p className=" font-bold text-3xl md:text-3xl">What Our Client Have To Say</p>
           </div>
            <InfiniteMovingCards speed={"normal"} items={list} direction="right" />
        </div>
    );
};

export default TestimonialSection;