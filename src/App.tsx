import { useEffect, useState } from 'react'
import { Header } from './header/header'
import { UploadButton } from './buttons/uploadbutton'
import { UploadWidget } from './widgets/uploadwidget'
import { LoadingWidget } from './widgets/loadingwidget'
import { ResultsWidget } from './widgets/resultswidget'
// import { PageBody } from './containers/body'
import "/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg"

// import './App.css'

function App() {
  //State to activate upload widget on click
  const [uploadActive, setUploadActive] = useState(false);
  useEffect(() => { console.log(`Upload Active = ${uploadActive}`) }, [uploadActive]);

  //State to confirm the upload.
  const [uploadConfirmed, setUploadConfirmed] = useState(false)
  useEffect(() => { console.log(`Upload confirmed = ${uploadConfirmed}`) }, [uploadConfirmed]);

  //State for the loading / processing animation
  const [loadingActive, setLoadingActive] = useState(false)
  useEffect(() => { console.log(`Loading Active = ${loadingActive}`) }, [loadingActive]);

  //State for the results to show
  const [resultsActive, setResultsActive] = useState(false);
  useEffect(() => { console.log(`ResultsActive = ${resultsActive}`) }, [resultsActive]);

  //State to confirm if API has responded
  const [apiCalled, setApiCalled] = useState<boolean>(false);
  useEffect(() => { console.log(`API Called = ${apiCalled}`) }, [apiCalled]);

  //State to contain the test API response
  const [apiResponse, setApiResponse] = useState<any>(null);
  useEffect(() => { console.log(`API Response = ${apiResponse}`) }, [apiResponse]);

  //Sets uploadActive state to true when upload button clicked
  //and toggle to false when Close is clicked
  const handleClick = () => {
    uploadActive ? setUploadActive(false) : setUploadActive(true);
    // console.log(`uploadActive = ${uploadActive}`)
  };

  // sets uploadConfirmed and loadingActive to true when confirm upload button is clicked
  const handleConfirm = () => {
    setUploadConfirmed(true);
    setLoadingActive(true);

    //Temporary timer
    setTimeout(() => {
      setLoadingActive(false);
      setResultsActive(true)
    }, 5000);
  };

  //Trigger to fetch the external API response
  function handleApiCall() {
    if (apiCalled === false) {
      setApiCalled(true)
    };
  };


  // const handleLoading = () => {
  //   uploadActive && uploadConfirmed ? setLoadingActive(true) : setLoadingActive(false)
  //   //when processed data, add additional state
  // };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg')]">
        <Header />
        <UploadButton uploadActive={uploadActive} onClick={handleClick} />
        <UploadWidget uploadActive={uploadActive} onClick={handleClick} uploadConfirmed={uploadConfirmed} onConfirm={handleConfirm} />
        {/* <LoadingWidget loadingActive={loadingActive} onLoaded={handleLoading} /> */}
        <LoadingWidget loadingActive={loadingActive} />
        <ResultsWidget resultsActive={resultsActive} apiCalled={apiCalled} apiResponse={apiResponse} setApiResponse={setApiResponse} handleApiCall={handleApiCall} />
      </ div>
    </>
  )
};

export default App;
