import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './views/Home';
import Navbars from './components/Navbars';
import MealHome from './views/MealHome';
import WorkoutHome from './views/WorkoutHome';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={[<WorkoutHome/>, <MealHome/>]}
            />
            <Route
              path='/login'
              element={[<Login/>]}
            />
            <Route
              path='/signup'
              element={[<Signup/>]}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
