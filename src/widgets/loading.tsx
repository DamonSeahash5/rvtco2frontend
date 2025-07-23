// A 'loading' animation will play for a determined amount of time
// I will mock this up with a timer
// results from mock JSON data will display after the animation.
// Use an Icon and apply a rotation animation to it
// visible whilst loadingState is true
interface LoadingAnimationProps {
    loadingActive: boolean;
    // onLoaded: () => void;
}

export const LoadingWidget: React.FC<LoadingAnimationProps> = ({ loadingActive }) => {
    return (
        <>
            <div className={loadingActive ? "visible flex h-full justify-center items-center text-purple-700 font-bold" : "invisible"}>
                <button className="flex-col w-60 h-60 bg-neutral-100/25 animate-spin rounded-full justify-items-center align-items-center text-magenta-500 shadow-lg">
                    {/* <ArrowUpOnSquareIcon className="w-2/3 stroke-green-700" /> */}
                    Loading...</button>
            </div>
        </>
    )
}