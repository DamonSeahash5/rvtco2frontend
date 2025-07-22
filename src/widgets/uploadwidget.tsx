// upload widget visible whilst uploadActive = true
// import { useState } from "react";
//pass onCLick through to Close button

export const UploadWidget: React.FC = ({ onClick, uploadActive }) => {
    return (
        <>
            <div className={uploadActive ? "visible w-60 h-60 bg-neutral-100/25 hover:bg-neutral-600/25 rounded-10 justify-items-center align-items-center text-magenta-500 shadow-lg" : "invisible"}>
                Upload Widget
                <button onClick={onClick} className="hover:bg-red-600"> X </button>
            </div>
        </>
    )
};