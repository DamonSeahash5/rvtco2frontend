import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultsWidgetProps {
    apiCalled: boolean;
    setApiCalled: React.Dispatch<any>;
    setApiResponse: React.Dispatch<any>;
    apiResponse: any;
};

export const ResultsWidget: React.FC<ResultsWidgetProps> = ({ apiCalled, setApiCalled, setApiResponse, apiResponse }) => {
    const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#f97316', '#06b6d4', '#84cc16'];

    const getChartData = () => {
        if (!apiResponse) return null;
        
        // If response has layers array with carbon data
        if (apiResponse.layers && Array.isArray(apiResponse.layers)) {
            return apiResponse.layers.map((layer: any) => ({
                name: layer.layer || layer.ice_name || 'Unknown',
                value: layer.carbon_per_m2_kgco2e || 0
            }));
        }
        
        // If it's an object with material keys
        if (typeof apiResponse === 'object' && !Array.isArray(apiResponse)) {
            return Object.entries(apiResponse).map(([name, value]) => ({
                name,
                value: typeof value === 'number' ? value : 0
            }));
        }
        
        // If it's already an array
        if (Array.isArray(apiResponse)) {
            return apiResponse;
        }
        
        return null;
    };

    const chartData = getChartData();

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
                    <h2 className="text-white font-bold mb-4">Carbon Breakdown</h2>
                    {apiResponse?.error ? (
                        <p className="text-red-400">{apiResponse.error}</p>
                    ) : chartData && chartData.length > 0 ? (
                        <div className="text-white flex-1 min-h-0 w-full flex flex-col">
                            <div className="flex-1 min-h-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={120}
                                            outerRadius={240}
                                            paddingAngle={2}
                                            dataKey="value"
                                            onClick={() => {}}
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value.toFixed(2)} kg CO2e/m²`} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', color: 'white' }} labelStyle={{ color: 'white' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="bg-white/90 rounded p-3 mt-2">
                                <div className="flex flex-wrap gap-4">
                                    {chartData.map((entry, index) => (
                                        <div key={`legend-${index}`} className="flex items-center gap-2">
                                            <div 
                                                className="w-3 h-3 rounded-full" 
                                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                            />
                                            <span className="text-sm text-gray-800">{entry.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
