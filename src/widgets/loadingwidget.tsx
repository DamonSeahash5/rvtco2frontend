// A 'loading' animation will play for a determined amount of time
// I will mock this up with a timer
// results from mock JSON data will display after the animation.
// Use an Icon and apply a rotation animation to it
// visible whilst loadingState is true
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface LoadingAnimationProps {
    loadingActive: boolean;
    // onLoaded: () => void;
};

export const LoadingWidget: React.FC<LoadingAnimationProps> = ({ loadingActive }) => {
    return (
        <>
            <div className={loadingActive ? "visible flex h-full justify-center items-center text-purple-700 font-bold" : "invisible"}>
                <div className="flex flex-col items-center justify-center">
                    <button className="flex w-60 h-60 bg-neutral-100/25 rounded-full items-center justify-center text-magenta-500 shadow-lg">
                        <ArrowPathIcon className="w-full animate-spin stroke-purple-600/50 m-4" />
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center text-center mt-7" >Loading...</div>
                </div>
            </div>
        </>
    )
};