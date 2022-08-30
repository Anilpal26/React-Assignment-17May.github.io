import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox';

function App() {

  const styling = {
    color: "blue", 
    backgroundColor: "red"
  };

  return (
    <div>
      <h1>30 Aug Assignmet</h1>
      <br/>
      <ColorBox style={styling}/>
    </div>
  );
}

export default App;
