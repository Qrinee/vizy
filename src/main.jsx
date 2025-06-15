import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'
import App from './App.jsx'
import PageNotFound from './views/PageNotFound.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Application from './views/Application.jsx';
import { ApiProvider } from './context/ApiContext.jsx';
import Success from './views/Success.jsx';
import Contact from './views/Contact.jsx';
import Terms from './views/Terms.jsx';
import PrivacyPolicy from './views/PrivacyPolicy';
import Cookies from './views/Cookies.jsx';


createRoot(document.getElementById('root')).render(

  <ApiProvider>
    <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/application" element={<Application/>} />
            <Route path='/success' element={<Success />} />
            <Route path="*" element={<PageNotFound />}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/privacy' element={<PrivacyPolicy/>} />
            <Route path='/cookies' element={<Cookies/>} />
          </Routes>
        </BrowserRouter>  
    </LanguageProvider>
  </ApiProvider>
  ,
)
