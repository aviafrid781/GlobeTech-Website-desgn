import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Services from './Pages/Services/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login/home" element={<Home />}></Route>
          
          <Route path="services" element={<Services />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
