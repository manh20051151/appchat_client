import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Login, Home, Public, FinalRegister, ResetPassword} from './pages/public'
import path from './ultils/path';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>} />
          <Route path={path.FINAL_REGISTER} element={<FinalRegister/>} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword/>} />

        </Route>
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
