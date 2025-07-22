// a simple button (or SVG) which will open the File Upload widget
// Render this on startup
// import { ArrowUpOnSquareIcon } from "@heroicons/react/16/solid"
import { useState } from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

// interface uploadActive {
//     uploadActive: boolean;
// }

export const UploadButton: React.FC = ({ onClick, uploadActive }) => {
    return (
        //visible whilst uploadActive = false else invisible
        <>
            <div className={uploadActive ? "invisible" : "visible flex h-screen justify-center items-center text-purple-700 font-bold"}>
                <button onClick={onClick} className="flex-col w-60 h-60 bg-neutral-100/25 hover:bg-neutral-600/25 rounded-full justify-items-center align-items-center text-magenta-500 shadow-lg">
                    <ArrowUpOnSquareIcon className="w-2/3 stroke-green-700" />
                    Upload</button>
            </div>
        </>
    )
};
