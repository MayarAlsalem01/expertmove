import { ReactNode } from "react";
import CardListItem from "../ui/CardListItem";
import GridCardBody from "./GirdCardBody";
import GridCardHeader from "./GirdCardHeader";

export default function GridCard({ children, number, id }: { children: ReactNode, number: number, id?: string }) {
    return (
        <div id={id} className={`flex flex-col items-center py-10  bg-[#E6E7E8]/10 rounded-tl-[100px] rounded-br-[100px] `}>
            <div className="relative">
                {children}

                <p className="absolute -left-5 -top-3 text-9xl font-bold text-secondrey opacity-40 stroke z-[-1]">{number}</p>
            </div>
        </div>
    )
}