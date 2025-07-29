//A container which the results (dummy) data and generates an interactive visualisation
//Renders when resultsActive state is true
//A series of proportionally sized circles for each category (wall, floor etc.) and arrange them with flex
//Each circle will be an instance of results object, with a relevant icon. When clicked, more detail will be displayed for that category.
import { useEffect, useState } from 'react';

interface ResultsWidgetProps {
    resultsActive: boolean;
    // onClick: () => void;
};

// results container React object (async)
export const ResultsWidget: React.FC<ResultsWidgetProps> = ({ resultsActive, }) => {
    // store the data in State [copilot suggests]
    const [resultsData, setResultsData] = useState(null);

    // useEffect to await data. Trigger when resultsActive becomes true
    useEffect(() => {
        // async function to obtain the results data and store it in state.
        if (resultsActive) {
            async function fetchData() {
                const response = await fetch("./data/dummydata.json");
                const data = await response.json();
                setResultsData(data);
                console.log("Data fetched:", data)
            };
            fetchData();
        }
    }, [resultsActive]);


    //Logic to sort data to size by biggest impact:
    function sortData() {
        //  access building_elements object within the json object/
        if (resultsData !== null) {
            const { building_elements } = resultsData;
            console.log(building_elements);
        }
        //      group by element_type [would need to add each instance per element if multiple of each type, but assume a single of each type for now]
        //      calculate the total emmisions per category by adding A1-A3, A4 & A5 for each element
        //      sort the data by emissions per category, highest to lowest, and save in a new array sortedData
    };

    // Logging function to inspect data
    function handleLogClick() {
        if (resultsData != null) {
            sortData();
            console.log(resultsData);
        } else { console.log("data still loading") }
    };

    //Logic to generate the size of each circle:
    //  Option 1: use index position, will create a linear distibution
    //      [0] should be largest, [-1] the smallest (allows for variable n in array)

    //  Option 2: proportionally represent the impact based upon the data. [use a minimum and maximum range for visibility]


    //Render circles and pass the size as a prop to each
    //  call a function to render a single circle per item
    //  on hover: increase the size of each circle to make it readable

    return (
        <>
            <div className={resultsActive ? "visible bg-fuchsia-600/25 hover:bg-green-600/25 rounded-lg g-fuchsia-600/25 px-4 py-2 w-1/10" : "hidden"}>
                <button className="flex" onClick={handleLogClick}>Log Results Data</button>
            </div>
        </>
    )

};

//Notestoself
//I need to research some visualisation tools. Or just use CSS?
//useEffect & useState to make React.FC async
//check function to render from array
