import './App.css';
import InformationCard from './components/InformationCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconName } from "react-icons/io";
import { Routes, Route, Link } from "react-router-dom";
import ProjectIntroduction from './components/ProjectIntroduction';

function App() {
  return (
    <div className="App">
      <h1>Project-Information-Card</h1>
      <InformationCard />
      <Routes>
          <Route path='introduction' element={<ProjectIntroduction />} />
      </Routes>
      
    </div>
  );
}

export default App;
