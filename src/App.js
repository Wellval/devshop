import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./views/Home";
import Technologies from "./views/Technologies";
import Portfolio from "./views/Portfolio";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path="/" exact element={<Navigate replace to="/home" />} />
          <Route path='/technologies' element={<Technologies/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
