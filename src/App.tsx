import { useEffect, useState } from 'react'
import { UploadButton } from './buttons/uploadbutton'
import { UploadWidget } from './widgets/uploadwidget'
import { LoadingWidget } from './widgets/loadingwidget'
// import { PageBody } from './containers/body'
import "/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg"

// import './App.css'

function App() {
  //State to activate upload widget on click
  const [uploadActive, setUploadActive] = useState(false);
  useEffect(() => { console.log(`Upload Active = ${uploadActive}`), [uploadActive]; })

  //State to confirm the upload.
  const [uploadConfirmed, setUploadConfirmed] = useState(false)
  useEffect(() => { console.log(`Upload confirmed = ${uploadConfirmed}`), [uploadConfirmed]; })

  //State for the loading / processing animation
  const [loadingActive, setLoadingActive] = useState(false)
  useEffect(() => { console.log(`Loading Active = ${loadingActive}`), [loadingActive]; })


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
    // setTimeout(() => { setLoadingActive(false) }, 5000);
  };

  // const handleLoading = () => {
  //   uploadActive && uploadConfirmed ? setLoadingActive(true) : setLoadingActive(false)
  //   //when processed data, add additional state
  // };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg')]">
        <UploadButton uploadActive={uploadActive} onClick={handleClick} />
        <UploadWidget uploadActive={uploadActive} onClick={handleClick} uploadConfirmed={uploadConfirmed} onConfirm={handleConfirm} />
        {/* <LoadingWidget loadingActive={loadingActive} onLoaded={handleLoading} /> */}
        <LoadingWidget loadingActive={loadingActive} />
      </ div>
    </>
  )
};

export default App;
