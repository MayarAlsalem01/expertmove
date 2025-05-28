import { ReactNode } from "react";

export default function GridList({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-28 gap-5 lg:gap-8">
            {children}
        </div>
    )
}