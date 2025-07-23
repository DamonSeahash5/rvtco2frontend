// Button to control the submission of the uploaded file data, close the upload widget and start the processing / wait animation
// On click, the button changes the visibility of Upload Widget (need new state)
// Once functional, this will trigger submission of our file data to the back end API for processing.

interface UploadConfirmButtonProps {
    onConfirm: () => void;
};

export const UploadConfirmButton: React.FC<UploadConfirmButtonProps> = ({ onConfirm }) => {
    // onClick, lift state up to widget and App
    // pass prop down to widget to close it
    // pass prop down to loadingwidget to open it
    return (
        <>
            {/* <div className="relative" */}
            <button className="bg-fuchsia-600/25 hover:bg-green-600/25 rounded-lg g-fuchsia-600/25 px-4 py-2 w-full"
                onClick={e => {
                    onConfirm()
                }}
            > Confirm Upload </button>
        </>
    )
} 