import { BriefcaseBusiness, CircleDollarSign, Headset, Users } from "lucide-react";

export default function Features (){
    const data =[
        {icon:<CircleDollarSign/>, val:"Value For Money"},
        {icon:<Headset/>, val:"Life Time Support"},
        {icon:<BriefcaseBusiness/>, val:"100% Job Assitance"},
        {icon:<Users/>, val:"Community Support"}
    ]
    return(
        <section className="w-full bg-white flex justify-center items-center py-12  px-3 border-b-1 border-gray-300 ">
            <div className="wrapper flex max-w-[1440px] w-full flex-col md:flex-row lg:justify-between gap-5 text-title">
               {data?.map((data, index)=>{
                return(
                    <div className="flex items-center gap-3 bg-primary rounded-full p-2 text-white" key={index}>
                    {data.icon}
                    <h5>{data.val}</h5>
                    </div>
                )
               })}
            </div>
        </section>
    )
}