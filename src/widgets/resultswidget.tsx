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
            <div className="fixed top-0 right-0 h-screen w-[calc(100%-300px)] flex flex-col justify-center items-center p-4">
                <div className="rounded-lg bg-fuchsia-600/25 px-6 py-4 w-full h-full flex flex-col overflow-hidden">
                    <h2 className="text-white font-bold mb-4">Results</h2>
                    {apiResponse?.error ? (
                        <p className="text-red-400">{apiResponse.error}</p>
                    ) : imageUrl ? (
                        <div className="text-white flex flex-col items-center justify-center flex-1 min-h-0">
                            <img src={imageUrl} alt="Results chart" className="max-w-full max-h-full object-contain rounded" />
                            {apiResponse && typeof apiResponse === 'object' && !apiResponse.chart && (
                                <pre className="bg-black/50 p-4 rounded mt-4 text-sm overflow-hidden">
                                    {JSON.stringify(apiResponse, null, 2)}
                                </pre>
                            )}
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