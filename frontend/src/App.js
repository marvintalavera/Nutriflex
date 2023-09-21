import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
//import Home from './views/Home';
import Navbars from './components/Navbars';
import MealHome from './views/MealHome';
import WorkoutHome from './views/WorkoutHome';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={user ? [<WorkoutHome/>, <MealHome/>]: <Navigate to="/login"/>}
            />
            <Route
              path='/login'
              element={!user ? [<Login/>] : <Navigate to="/"/>}
            />
            <Route
              path='/signup'
              element={!user ? [<Signup/>] : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
