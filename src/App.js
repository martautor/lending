

import HomeInfo from './components/MainInfo';
import './app.css';
import Footer from './components/AppBar';
import DrawerAppBar from './components/DrawerAppBar';
function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <HomeInfo/>
    </div>
  );
}

export default App;
