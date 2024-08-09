import './css/app.css';
import DrawerAppBar from './components/DrawerAppBar';
import '@fontsource/roboto/300.css';
import { Outlet } from 'react-router';
function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <Outlet/>
    </div>
  );
}

export default App;
