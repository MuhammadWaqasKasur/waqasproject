import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './compotnets/Navebar';
import Carousel from './compotnets/Carousel';
import Cards from './compotnets/Cards';
import Counter from './compotnets/Counter'
import User from './compotnets/User';
import Products from './compotnets/Products';
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home"
import SmartWatches from "./compotnets/SmartWatches"
import Register from './compotnets/Register';
import Login from './compotnets/Login';
import ProductDescription from './pages/ProductDescription';
import Slider from './compotnets/Slider';
import Checkout from './compotnets/Checkout';
import Dashboard from './pages/Dashboard';
import Forget from './compotnets/Forget';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>        
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/slider" element={<Slider/>}></Route>
        <Route path="/Products/:id" element={<ProductDescription/>}></Route>
        <Route path="/smartwatches" element={<SmartWatches/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
 
      </Routes>
      {/* <Cards /> */}
      {/* <User /> */}
    </>
  );
}

export default App;
