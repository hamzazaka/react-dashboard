import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <SideBar/>
        <div className="others">
          <h2>others</h2>
          </div> 
      </div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
