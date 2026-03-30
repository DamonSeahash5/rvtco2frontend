import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface LoadingAnimationProps {
    loadingActive: boolean;
};

export const LoadingWidget: React.FC<LoadingAnimationProps> = ({ loadingActive }) => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!loadingActive) {
            setLogs([]);
            return;
        }

        const fetchLogs = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${apiUrl}/logs`);
                if (response.ok) {
                    const data = await response.json();
                    // Handle both array and object responses
                    if (Array.isArray(data)) {
                        setLogs(data);
                    } else if (data.logs && Array.isArray(data.logs)) {
                        setLogs(data.logs);
                    } else if (typeof data === 'string') {
                        setLogs([data]);
                    }
                }
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        // Fetch logs immediately and then every 500ms
        fetchLogs();
        const interval = setInterval(fetchLogs, 500);

        return () => clearInterval(interval);
    }, [loadingActive]);

    return (
        <>
            <div className={loadingActive ? "visible fixed inset-0 flex justify-center items-center text-purple-700 font-bold" : "invisible"}>
                <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
                    <div className="flex w-60 h-60 bg-neutral-100/25 rounded-full items-center justify-center text-magenta-500 shadow-lg">
                        <ArrowPathIcon className="w-full animate-spin stroke-purple-600/50 m-4" />
                    </div>
                    <div className="text-center text-white">
                        <p className="mb-4">Processing...</p>
                        <div className="bg-black/50 rounded p-4 max-w-2xl text-left text-sm h-12 flex items-center">
                            {logs.length > 0 ? (
                                <div className="text-gray-300">
                                    {logs[logs.length - 1]}
                                </div>
                            ) : (
                                <div className="text-gray-500">Waiting for logs...</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
