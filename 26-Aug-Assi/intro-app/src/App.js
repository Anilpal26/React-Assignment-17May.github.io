import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <br/>
        <Name/>
        <br/>
        <Bio/>
        <br/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
