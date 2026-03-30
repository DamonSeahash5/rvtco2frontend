import { useState } from 'react';

interface ResultsWidgetProps {
    apiCalled: boolean;
    setApiCalled: React.Dispatch<any>;
    setApiResponse: React.Dispatch<any>;
    apiResponse: any;
};

export const ResultsWidget: React.FC<ResultsWidgetProps> = ({ apiCalled, setApiCalled, setApiResponse, apiResponse }) => {
    const getImageUrl = () => {
        if (!apiResponse) return null;
        
        // If it's a base64 encoded image
        if (typeof apiResponse === 'string' && apiResponse.startsWith('data:image')) {
            return apiResponse;
        }
        
        // If it's base64 without the data URI prefix
        if (typeof apiResponse === 'string') {
            return `data:image/png;base64,${apiResponse}`;
        }
        
        // If it's an object with a chart property
        if (apiResponse.chart) {
            if (apiResponse.chart.startsWith('data:image')) {
                return apiResponse.chart;
            }
            return `data:image/png;base64,${apiResponse.chart}`;
        }
        
        return null;
    };

    const imageUrl = getImageUrl();

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-[300px] flex flex-col p-4 pt-32">
                <div className="rounded-lg bg-fuchsia-600/25 px-6 py-4 flex-1 overflow-auto">
                    <h2 className="text-white font-bold mb-4">Summary</h2>
                    {apiResponse?.summary ? (
                        <div className="text-white whitespace-pre-wrap text-sm">
                            {typeof apiResponse.summary === 'string' 
                                ? apiResponse.summary 
                                : JSON.stringify(apiResponse.summary, null, 2)}
                        </div>
                    ) : (
                        <p className="text-white text-sm">No summary available</p>
                    )}
                </div>
            </div>
            <div className="fixed top-0 right-0 h-screen w-[calc(100%-300px)] flex flex-col justify-center items-center p-4">
                <div className="rounded-lg bg-fuchsia-600/25 px-6 py-4 w-full h-full flex flex-col overflow-hidden">
                    <h2 className="text-white font-bold mb-4">Results</h2>
                    {apiResponse?.error ? (
                        <p className="text-red-400">{apiResponse.error}</p>
                    ) : imageUrl ? (
                        <div className="text-white flex flex-col items-center justify-center flex-1 min-h-0">
                            <img src={imageUrl} alt="Results chart" className="max-w-full max-h-full object-contain rounded" />
                        </div>
                    ) : apiResponse ? (
                        <div className="text-white flex-1 flex items-center justify-center min-h-0">
                            <pre className="bg-black/50 p-4 rounded text-sm overflow-hidden">
                                {JSON.stringify(apiResponse, null, 2)}
                            </pre>
                        </div>
                    ) : (
                        <p className="text-white">Processing...</p>
                    )}
                </div>
            </div>
        </>
    )
};