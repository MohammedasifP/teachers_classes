import logo from './logo.svg';
import './App.css';
import { Signup } from './Components/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Teachers } from './Components/Teachers/Teachers';



function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/teachers' element={<Teachers/>}/>
        </Routes>
    </div>
  );
}

export default App;
