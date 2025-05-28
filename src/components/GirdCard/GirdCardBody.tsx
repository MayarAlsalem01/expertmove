import { ReactNode } from "react";

export default function GridCardBody({ children }: { children: ReactNode }) {
    return (
        <div className="body flex flex-col gap-4">
            <ul className="list-disc flex flex-col gap-4">
                {children}
            </ul>
        </div>
    )
}