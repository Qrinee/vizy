import { useEffect } from 'react'
import './App.css'
import AppContent from './components/App/AppContent'
import MainLayout from './layouts/Main-Layout/MainLayout'

function App() {
  useEffect(() => {
      fetch('https://back-black-six.vercel.app/').then(e => e.json()).then(e => console.log(e))
  },[])

  return (
    <MainLayout>
      <AppContent/>
    </MainLayout>
  )
}

export default App
