//A child of upload widget to handle file uploading
//Create a form with an inut type of file
//Need to store the file / data in memory somewhere (until API is built)
//useState of the selected file - lift up to parent
//onFileChange function to handle upload of the new file and change the state

interface FileUploadProps {
    currentFile: File | null
    onFileChange: (file: File | null) => void;
};

export const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, currentFile }) => {

    return (
        <>
            <div>
                <h3>Select File...</h3>
                <input
                    type="file"
                    onChange={e => {
                        const file = e.target.files ? e.target.files[0] : null;
                        onFileChange(file);
                    }}
                />
            </div>
        </>
    )
};

//e.target.files[0] is the selected file object (first of the files list in the inut window)
//if not selected this could be null, so need to also accept a null input or type