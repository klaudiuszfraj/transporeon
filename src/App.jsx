import React from 'react';
import './main.scss';
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
    </div>
  );
}

export default App;
