import { useState } from 'react'
import { UploadButton } from './buttons/uploadbutton'
import { UploadWidget } from './widgets/uploadwidget'
// import { PageBody } from './containers/body'
import "/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg"

// import './App.css'

function App() {
  //State to activate upload widget on click
  const [uploadActive, setUploadActive] = useState(false);

  //Sets uploadActive state to true when upload button clicked
  //and toggle to false when Close is clicked
  const handleClick = () => {
    console.log(`uploadActive = ${uploadActive}`)
    uploadActive ? setUploadActive(false) : setUploadActive(true);
  };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg')]">
        <UploadButton uploadActive={uploadActive} onClick={handleClick} />
        <UploadWidget uploadActive={uploadActive} onClick={handleClick} />
      </ div>
    </>
  )
}

export default App
