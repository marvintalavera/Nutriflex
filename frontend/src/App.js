import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
