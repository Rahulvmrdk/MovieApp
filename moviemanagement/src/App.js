import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './componets/HomePage';
import AddMovie from './componets/AddMovie';
import AboutUs from './componets/AboutUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddMovie data={{mname:'',mdate:'',mactor:'',mcamera:'',mactress:'',mproducer:'',mdirector:'',mlang:''}} method='post'/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
