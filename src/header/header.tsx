//Header to display the website name
//static element
interface HeaderProps {

};

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <>
            <div className="flex-col w-fit h-auto bg-neutral-100/25 rounded-10 justify-items-start align-items-center shadow-lg rounded-br-xl px-10">
                <div className="flex flex-row pt-10 italic text-green-600 text-4xl tracking-wider">
                    <h1>RVTC0</h1>
                    <sub>2.0</sub>
                </div>
                <div className="flex pb-4 pr-2">
                    <h2>Revit File Carbon Calculator</h2>
                </div>
            </div>
        </>
    );
};