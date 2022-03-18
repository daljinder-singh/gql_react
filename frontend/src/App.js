import './App.css';
import Movies from './component/Movies';
import ADDMOVIES from './component/AddMovies';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Movies />  */}
        <ADDMOVIES />
      </header>
    </div>
  );
}

export default App;
