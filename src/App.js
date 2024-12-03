import logo from './logo.svg';
import './App.css';
import Section2 from './Sections/Section2';
import Section4 from './Sections/Section4';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black'}}>
      <Section2/>
      <Section4/>
    </div>
  );
}

export default App;
