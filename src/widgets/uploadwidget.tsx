// upload widget visible whilst uploadActive = true
//pass onClick through to Close button
// currentFile.name to contain .rvt
//render an upload button within the widget to confirm

import { useState } from "react";
import { FileUpload } from "./uploadform";
import { UploadConfirmButton } from "../buttons/uploadconfirmbutton.tsx";

interface UploadWidgetProps {
    uploadActive: boolean;
    onClick: () => void;
}

export const UploadWidget: React.FC<UploadWidgetProps> = ({ onClick, uploadActive, }) => {
    //Set state of current file to be used for saving / exporting file data
    const [currentFile, setCurrentFile] = useState<File | null>(null);

    //log the current file on file change
    const handleFileChange = (currentFile: File | null) => {
        setCurrentFile(currentFile)
        //allow for a null value and ensure file is correct extension
        if (currentFile && currentFile.name.includes(".rvt")) {
            console.log(currentFile.name);
            console.log(currentFile.type);
        } else throw window.alert("Error, please select an .rvt file");

    }

    return (
        <>
            <div className={uploadActive ? "visible w-120 h-120 bg-neutral-100/25 rounded-md justify-self-center text-magenta-500 shadow-lg flex flex-col justify-between items-center p-2" : "invisible"}>
                <div className="w-full flex justify-end">
                    <button onClick={onClick} className="hover:bg-red-600/50 py-1 px-2 m-1 rounded-md"> X </button>
                </div>
                <div className="flex-1 w-full flex items-center justify-center bg-amber-100/25 px-2 py-3">
                    <FileUpload currentFile={currentFile} onFileChange={handleFileChange} />
                </div>
                <div className="w-full flex justify-center mt-2 mb-1">
                    <button onClick={onClick} className="bg-fuchsia-600/25 hover:bg-green-600/25 rounded-lg px-4 py-2 w-full">
                        Confirm Upload
                    </button>
                </div>
                {/* <UploadConfirmButton /> */}
            </div>
        </>
    )
};