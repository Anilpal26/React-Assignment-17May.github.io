import './App.css';
import Navigationbar from './Components/Navigationbar';
import Player from './Components/Player';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <div class='bg-gray-200 min-h-screen pb-24'>
      <Navigationbar />
      <div className='container mx-auto py-4'>
        <Home />
      </div>
      <Player />
    </div>
    </>
  );
}

export default App;
