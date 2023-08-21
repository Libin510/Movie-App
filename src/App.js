import logo from './logo.svg';
import './App.css';
import Hme from './Movieapprjct/Hme';
import { createContext, useState } from 'react';
import Popularmovies from './Movieapprjct/Popularmovies';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comedymovies from './Movieapprjct/Comedymovies';
import Latestmovies from './Movieapprjct/Latestmovies';
import Latestdtail from './Moviedtails/Latestdtail';
import Populardtails from './Moviedtails/Populardtails';
import Comedydtails from './Moviedtails/Comedydtails';
import Bannerpg from './Movieapprjct/Bannerpg';
import Bmbnner from './Movieapprjct/Bmbnner';





export const newcontext= createContext()
function App() {
  const [movies,setmovies] = useState([]);
  const [pop,setpop] = useState([]);
  const [latest,setLatest] = useState([]);


  return (
    <div>
 <newcontext.Provider value={[movies,setmovies,pop,setpop,latest,setLatest]}>
    <BrowserRouter>
    <Hme/>
    {/* <Bannerpg/> */}
         {/* <Bmbnner/> */}

            <Routes>

             <Route path='/' element={<Popularmovies/>}></Route>
             <Route path='/comedy' element={<Comedymovies/>}></Route>
             <Route path='/latest' element={<Latestmovies/>}></Route>
             <Route path='/late/:id' element={<Latestdtail/>}></Route>
             <Route path='/pop/:id' element={<Populardtails/>}></Route>
             <Route path='/come/:id' element={<Comedydtails/>}></Route>
             </Routes>
    </BrowserRouter>
</newcontext.Provider>
    </div>
  );
}

export default App;
