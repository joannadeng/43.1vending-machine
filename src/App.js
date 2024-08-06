import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Coke from './Coke'
import Candy from './Candy'
import Chips from './Chips'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<VendingMachine/>}></Route>
          <Route path='/coke' element={<Coke/>}></Route>
          <Route path='/candy' element={<Candy/>}></Route>
          <Route path='/chips' element={<Chips/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
