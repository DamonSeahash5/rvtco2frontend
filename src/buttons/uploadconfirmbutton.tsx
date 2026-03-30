interface UploadConfirmButtonProps {
    onConfirm: (file: File | null) => void;
    currentFile: File | null;
};

export const UploadConfirmButton: React.FC<UploadConfirmButtonProps> = ({ onConfirm, currentFile }) => {
    const handleClick = () => {
        console.log("Confirm clicked, currentFile:", currentFile);
        if (!currentFile) {
            window.alert("Please select a file first");
            return;
        }
        onConfirm(currentFile)
    }

    return (
        <>
            <button className="bg-fuchsia-600/25 hover:bg-green-600/25 rounded-lg px-4 py-2 w-full"
                onClick={handleClick}
            > Confirm Upload </button>
        </>
    )
} 