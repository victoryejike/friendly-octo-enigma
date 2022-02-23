import './App.css';
import Header from './container/Header';
import Auth from './container/Auth';
import { AppContextProvider } from './context/appContext'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Auth />
      </AppContextProvider>
    </div>
  );
}

export default App;