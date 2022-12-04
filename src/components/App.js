import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./Main";
import Profile from './Profile';


function App() {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/video/:id' element={<videoPage/>} />
          </Routes>
      </div>
    );
}

export default App;