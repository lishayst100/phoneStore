
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify'
import PhoneDetails from './components/PhoneDetails';
import About from './components/About';
import CardList from './cardsPages/CardList';
import EditCard from './cardsPages/EditCard';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<PhoneDetails/>}/>
        <Route path='/about/products/:id' element={<PhoneDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/not-found' element={<NotFound/>}/>
        <Route path='/cards' element={<CardList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cards/edit/:id' element={<EditCard />} />
      </Routes>
      <ToastContainer/>
      <Footer/>
     
    </div>
  );
}

export default App;
