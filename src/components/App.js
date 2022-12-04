import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./Main";
import Profile from './Profile';
import VideoPage from "./VideoPage";


function App() {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/video/:id' element={<VideoPage/>} />
          </Routes>
      </div>
    );
}

export default App;