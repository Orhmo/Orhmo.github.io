
import './index.css'
import {
  createContext,
  useState,
  useEffect
} from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { AnimatePresence } from "framer-motion";

import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Landing from './Pages/Home';
import Html from './Pages/HTML';
import React from './Pages/Projects';
import Solidity from './Pages/Solidity';

export const ThemeContext = createContext(null);

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4450);
  }, []);

  const location = useLocation();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className='app overflow-hidden' id={theme}>
    {loading ? (<Loading />) :
      (
    <>
       <NavBar />
       <div className="switch z-10">
       <ReactSwitch
            onColor="#0891b2"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.9)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.4)"
            height={24}
            width={48}
            className="react-switch"
            id="material-switch"
            onChange={toggleTheme}
            checked={theme === "dark"} />
       </div>
       <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Landing />}></Route>
              <Route path='/html' element={<Html />}></Route>
              <Route path='/react' element={<React />}></Route>
              <Route path='/solidity' element={<Solidity />}></Route>
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
    )
  }
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
