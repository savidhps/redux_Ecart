import './App.css'
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import { Route,Routes } from 'react-router-dom';
import  Home  from "./pages/Home";
import  Cart from "./pages/Cart";
import  Wishlist  from "./pages/Wishlist";



function App() {
  

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
