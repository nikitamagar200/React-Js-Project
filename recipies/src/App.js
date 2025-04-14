import './App.css';
import Mainpage from './Component/Mainpage';
import {Route,Routes} from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';

function App() {
  return (
   
    
     <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}></Route>
      <Route path='/:mealid' element={<Mealinfo></Mealinfo>}></Route>
     </Routes>
  );
}

export default App;
