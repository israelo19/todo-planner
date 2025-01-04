import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {
  return (

   
    <div className="App">
    <div> 
    <Navbar></Navbar>  
  
    </div>
    
      <header className="App-header">
      <Home></Home>
      {/* <List></List> */}
     
      </header>
    </div>
  );
}

export default App;
