import './App.css';
import Navbar from '../components/Navbar/Navbar';
import LeftBar from '../components/LeftBar/LeftBar';
import RightContent from '../components/RightContent/RightContent';
import React from 'react'
import { BarIndexProvider } from '../context/BarIndexContext';

function App() {
  return (
    <BarIndexProvider>
      <div className="App">
        <Navbar/>
        <div className='page-content'>
          <LeftBar/>
          <RightContent/>     
        </div>
      </div>
    </BarIndexProvider>
  );
}

export default App;
