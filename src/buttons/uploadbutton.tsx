// a simple button (or SVG) which will open the File Upload widget
// Render this on startup

export const UploadButton: React.FC = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <button className="w-60 h-60 bg-blue-900 rounded-full">
                Upload</button>
        </div>
    )
};