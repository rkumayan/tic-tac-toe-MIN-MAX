
import './App.css';

// import components
import ShowGrid from './components/ShowGrid'

function App() {
  const gameData = [0,0,0,0,0,0,0,0,0];
  return (
    <div className="App">
      <ShowGrid gameData = {gameData} />
    </div>
  );
}

export default App;
