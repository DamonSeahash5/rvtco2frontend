// Button to control the submission of the uploaded file data, close the upload widget and start the processing / wait animation
// On click, the button changes the visibility of Upload Widget (need new state)
// Once functional, this will trigger submission of our file data to the back end API for processing.

interface UploadConfirmButtonProps {
    onClick: () => void;
};

export const UploadConfirmButton: React.FC<UploadConfirmButtonProps> = ({ onClick }) => {
    // onClick, lift state up to widget and App
    // pass prop down to widget to close it
    // pass prop down to loadingwidget to open it
    return (
        <>
            {/* <div className="relative" */}
            <button className="absolute bg-fuchsia-600/25 hover:bg-green-600/25 rounded-lg p-2 mb-2 mx-auto"> Confirm Upload </button>
        </>
    )
} 