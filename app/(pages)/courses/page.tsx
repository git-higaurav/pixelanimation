import { NotebookText } from "lucide-react";

export default function Courses (){
    const course = [
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        },
        {
            image:"https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            rating:4,
            title:"Grahic Designing",
            description:"Master design basics, tools, and techniques to create stunning visuals for print and digital media.",
            mentor:"Deepak",
            fee:"8999 / Rs."
        }
    ]
    return(
        <div className="bg-[url('/images/course-bg.png')]  flex w-full  justify-center py-16">
            <div className="wrapper max-w-[1440px] justify-cente  w-full">
            <section className="w-full flex flex-col gap-10">
                <div className="flex w-full  items-center justify-center px-3">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="flex items-center gap-3">
                        <NotebookText className="text-primary" size={20} />
                        <span>Popular Courses</span>
                        </div>
                        <h2 className="text-3xl font-bold lg:text-5xl">Our Popular Courses</h2>
                    </div>
                </div>
                <div className="flex gap-5 justify-center  w-full flex-wrap items-center">
                    {course?.map((data, index)=>{
                        return(
                            <div key={index} className="max-w-[327px]  bg-white rounded-xl shadow-2xl flex flex-col gap-4 pb-5 ">
                                <section>
                                    <img src={data.image} alt={"course"} className="rounded-xl rounded-b-none" />
                                </section>
                                <section className="px-3 flex flex-col py-4 gap-3">
                                    <h3 className="font-bold text-xl">{data.title}</h3>
                                    <p>{data.description}</p>
                                </section>
                                <div className="border-t border-dotted border-gray-400 mx-3">

                                </div>
                                <section className="flex justify-between items-center px-3">

                                    <div className="flex justify-center items-center gap-3">
                                        <div className="bg-gray-500 rounded-full w-[30px] h-[30px]"></div>
                                    <h3>{data.mentor}</h3>
                                    </div>
                                    <span>{data.fee}</span>
                                </section>
                            </div>
                        )
                    })}
                </div>
            </section>
            </div>
        </div>
    )
}