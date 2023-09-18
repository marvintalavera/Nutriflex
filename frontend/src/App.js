import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MealHome from './views/MealHome';
import WorkoutHome from './views/WorkoutHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={[<WorkoutHome/>, <MealHome/>]}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
