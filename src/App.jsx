import React from 'react';
import './main.scss';
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Cards/>
    </div>
  );
}

export default App;
