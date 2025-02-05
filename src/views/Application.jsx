import React, { useEffect, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import MainLayout from '../layouts/Main-Layout/MainLayout'


export default function Application() {
  const [step, setStep] = useState(0)
  useEffect(() => {
      window.scrollTo(0,0); 
  }, [step])
  return (
    <MainLayout>
      {
          step == 0 ? (
            <FirstStep/>
          ) : null
      }
      {
        
        step == 1 ? (
          <SecondStep/>
        ) : null
      }

      <button onClick={() => setStep(1)} className='primary' style={{margin: 'auto', display: 'block', marginTop:'20px'}}>Continue</button>
    </MainLayout>
  )
}
