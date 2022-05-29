
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/orderReview' element={<OrderReview />}></Route>
          <Route path='/grandpa' element={<Grandpa />}></Route>

        </Routes>
    </div>
  );
}

export default App;
