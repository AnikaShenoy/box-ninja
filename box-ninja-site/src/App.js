import './App.css';
import HomepageImage from './components/HomepageImage' 
import HandTrack from './components/HandTrack'

//To do: Incorporate HandTrack.js into this file. Figure out handTrack API

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage/>
        <p>
          Box Ninja
        </p>

      </header>
    </div>
  );
}

export default App;
