import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/create' element={<Add />} ></Route>
          <Route path='/edit' element={<Edit />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
