import Login from './pages/login';
import { BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css';
import List from './pages/listtodo';

function App() {
  return (
<BrowserRouter>


<Route path='/my-list' element={<List/>}  /> 
<Login/>
  <Route path='/' element={<Login/>}  />   




</BrowserRouter>


  )
  
  }
export default App
