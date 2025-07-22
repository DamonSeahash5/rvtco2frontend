// upload widget visible whilst uploadActive = true
// import { useState } from "react";
//pass onCLick through to Close button

interface UploadWidgetProps {
    uploadActive: boolean;
    onClick: () => void;
}

export const UploadWidget: React.FC<UploadWidgetProps> = ({ onClick, uploadActive }) => {
    return (
        <>
            <div className={uploadActive ? "visible relative w-120 h-120 bg-neutral-100/25 rounded-md justify-self-center align-items-center text-magenta-500 shadow-lg" : "invisible"}>
                Upload Widget
                <button onClick={onClick} className="absolute hover:bg-red-600/50 top-2 right-2 p-2 rounded-md"> X </button>
            </div>
        </>
    )
};