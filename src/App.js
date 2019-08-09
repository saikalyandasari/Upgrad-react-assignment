import React from 'react';
import Navbar from'./component/Navbar';
import Spinner from'./component/spinner';

import  './Api.js';
import './App.css';
// import 'bootstra/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
      <main style={{marginTop: '5px',padding:'0',marginInlineStart:'130px',style:'bold'}}>
        <div className="paragraph">
        <h1>Rick and Morty</h1>
        <h5 class="card-subtitle mb-1 text-muted">From wikipedia, the free encyclopedia</h5>
        <p1>
        <b>Rick and Morty</b> is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block ‘Adult Swim’. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons.</p1>
        <br />
        <br />
        <p2>Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has been acclaimed by critics for its originality, creativity and humor.</p2>
        </div>
      </main>
      </div>
      
  );
}
export default App;
