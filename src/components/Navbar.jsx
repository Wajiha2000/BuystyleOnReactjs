import '../App.css'
import '@fontsource/roboto/300.css';
import Navigation from './Navigation';
import Lists from './Lists';
import Props from './Props'
import Home from './Home'
import Events from './Events';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/lists' element={<Lists />}></Route>
          <Route path='/props' element={<Props />}></Route>
          <Route path='/events' element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
