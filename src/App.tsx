// import { useState } from 'react'
import { UploadButton } from './buttons/uploadbutton'
// import { PageBody } from './containers/body'
import "/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg"

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('/src/assets/artem-balashevsky-VkirwC2YH50-unsplash.jpg')]">
        <UploadButton />
      </ div>
    </>
  )
}

export default App
