
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const handleData =  async () => {
    const res = await axios.get('https://my-project-name.zy492613075.workers.dev/')
    console.log(JSON.stringify(res))
  }

  useEffect(() => {
    handleData()
  }, [])
 

  return (
    <>
      你哦好
    </>
  )
}

export default App
