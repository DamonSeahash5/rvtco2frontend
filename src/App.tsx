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
  // sends file to backend API
  const handleConfirm = async (file: File | null) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    setUploadConfirmed(true);
    setLoadingActive(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("Uploading to:", `${apiUrl}/upload`);
      console.log("File:", file.name, file.type, file.size);

      const response = await fetch(`${apiUrl}/upload`, {
        method: 'POST',
        body: formData,
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      setApiResponse(data);
      setApiCalled(true);
    } catch (error) {
      console.error("Error uploading file:", error);
      setApiResponse({ error: String(error) });
    } finally {
      setLoadingActive(false);
      setResultsActive(true);
    }
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
        <>
          {resultsActive ? <ResultsWidget apiCalled={apiCalled} setApiResponse={setApiResponse} setApiCalled={setApiCalled} apiResponse={apiResponse} /> : null}
        </>
      </ div>
    </>
  )
};

export default App;
