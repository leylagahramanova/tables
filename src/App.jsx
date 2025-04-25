import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstTable from './Components/First/FirstTable';
import SecondTable from './Components/Second/SecondTable';
import Home from './Components/Home';
import PageInProgress from './Components/PageInProgress';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/results" element={<SecondTable />} />
          <Route path="/live" element={<FirstTable />} />
          <Route path="/starlist" element={<PageInProgress/>} />
          <Route path="/shedule" element={<PageInProgress/>}/>
          <Route path="/medals" element={<PageInProgress/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
