// upload widget visible whilst uploadActive = true
//pass onClick through to Close button
// currentFile.name to contain .rvt
//render an upload button within the widget to confirm

import { useState } from "react";
import { FileUpload } from "./uploadform";
import { UploadButton } from "../buttons/uploadbutton";

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
            <div className={uploadActive ? "visible relative w-120 h-120 bg-neutral-100/25 rounded-md justify-self-center align-items-center text-magenta-500 shadow-lg" : "invisible"}>
                <FileUpload currentFile={currentFile} onFileChange={handleFileChange} />
                <button onClick={onClick} className="absolute hover:bg-red-600/50 top-2 right-2 p-2 rounded-md"> X </button>
                {/* <UploadConfirmButton />  */}
            </div>
        </>
    )
};