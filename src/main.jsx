import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.css'
import { Router } from './screens/Router'
import { Context, ContextProvider } from './Context'
import { ModalContainer } from './components/Modal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ModalContainer />
      <ToastContainer /> 
      <main className='min-h-screen w-full bg-primary font-poppins relative' >
        <Router />
      </main>
    </ContextProvider>
  </React.StrictMode>,
)
