import './App.css';
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {Home} from "./components/home";
import {samiul} from "./assets";

function App() {
  return (
      <BrowserRouter>
        <div className="h-screen bg-cover bg-center"
             style={{backgroundImage: `url(${samiul})`}}>
            <Header/>
            <Home/>
        </div>
        {/*<Footer/>*/}
      </BrowserRouter>
  );
}

export default App;
