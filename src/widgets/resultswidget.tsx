import { useState } from 'react';

interface ResultsWidgetProps {
    apiCalled: boolean;
    setApiCalled: React.Dispatch<any>;
    setApiResponse: React.Dispatch<any>;
};

export const ResultsWidget: React.FC<ResultsWidgetProps> = ({ apiCalled, setApiCalled, setApiResponse }) => {
    const [resultsData, setResultsData] = useState<any>(null);
    const [chartImage, setChartImage] = useState<string | null>(null);
    const [helloMessage, setHelloMessage] = useState<string | null>(null);

    async function handleLogClick() {
        if (resultsData === null) {
            const response = await fetch("./data/dummydata.json");
            const data = await response.json()
            setResultsData(data);
            const { building_elements } = data;
            console.log("Data fetched:", building_elements)
        }
        else { console.log("data already loaded") }
    };

    async function handleApiCall() {
        if (apiCalled === false) {
            setApiCalled(true);
            const apiUrl = import.meta.env.VITE_API_URL;
            try {
                const response = await fetch(`${apiUrl}/`);
                const data = await response.json();
                setHelloMessage(data.message);
                console.log("Hello message:", data.message);
            } catch (error) {
                console.error("Error fetching hello:", error);
            }
        };
    };

    return (
        <>
            <div className="visible rounded-lg g-fuchsia-600/25 px-4 py-2 w-1/10">
                <div><button className="flex border-2  bg-fuchsia-600/25 hover:bg-green-600/25" onClick={handleLogClick}>Log Results Data</button></div>
                <div><button className="flex border-2  bg-fuchsia-600/25 hover:bg-green-600/25" onClick={handleApiCall}>Say "Hello!"</button></div>
                {helloMessage && <p className="mt-2 text-white">{helloMessage}</p>}
                {chartImage && <img src={chartImage} alt="Carbon breakdown chart" className="mt-4 max-w-md" />}
            </div>
        </>
    )
};