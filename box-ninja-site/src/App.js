import './App.css';
import HomepageImage from './components/HomepageImage' 
import HandTrack from './components/HandTrack'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage/>
        <p>
          Box Ninja
        </p>
        <HandTrack/> 
      </header>
    </div>
  );
}

export default App;
