import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Home/>
        </div>
    </div>
  );
}

export default App;
