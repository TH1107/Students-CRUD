import './App.css';
import NavBar from './components/NarBar';
import Contents from './components/Contents';
import Students from './components/API/Students';

function App() {
  return (
    <div className="App overflow-hiden">
      <h1>
        <NavBar/>
      </h1>
      <div>
        <Contents/>
        <Students/>
      </div>
      
    </div>
  );
}

export default App;
