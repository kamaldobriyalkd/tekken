import React from 'react';
import './App.css';
import {FighterCards} from './components/fighterCards/fightercards';
import {SearchBar} from './components/searchbar/searchbar';

//==============
//fighter images
import p1 from './components/fighters/Paul Phoenix.jpg';
import p2 from './components/fighters/Julia Chang.png';
import p3 from './components/fighters/Jin Kazama.png';
import p4 from './components/fighters/Hwoarang.jpg';
import p5 from './components/fighters/Nina Williams.jpg';
import p6 from './components/fighters/King.jpg';
import p7 from './components/fighters/Yoshimitsu.jpg';
import p8 from './components/fighters/Marshall Law.jpg';
import p9 from './components/fighters/Ling Xiaoyu.jpg';
import p10 from './components/fighters/Lei Wulong.jpg';
import p11 from './components/fighters/Eddy Gordo.jpg';
import p12 from './components/fighters/Heihachi Mishima.jpg';
import p13 from './components/fighters/Anna Williams.jpg';
import p14 from './components/fighters/Mokujin.jpg';
import p15 from './components/fighters/Gun Jack.jpg';
import p16 from './components/fighters/Bryan Fury.jpg';
import p17 from './components/fighters/Kuma.jpg';
import p18 from './components/fighters/True Ogre.jpg';
import p19 from './components/fighters/Ogre.jpg';
import p20 from './components/fighters/Dr. Bosconovitch.jpg';
//==============


class App extends React.Component{
  constructor(){
    super();
    this.state={
     fighters:[
       {name: "Paul Phoenix", id:"f1", img:p1},
       {name: "julia Chang", id:"f2", img:p2},
       {name: "Jin Kazama", id:"f3", img:p3},
       {name: "Hwoarang", id:"f4", img:p4},
       {name: "Nina Williams", id:"f5", img:p5},
       {name: "King", id:"f6", img:p6},
       {name: "Yoshimitsu", id:"f7", img:p7},
       {name: "Marshall Law", id:"f8", img:p8},
       {name: "Ling Xiaoyu", id:"f9", img:p9},
       {name: "Lei Wulong", id:"f10", img:p10},
       {name: "Eddy Gordo", id:"f11", img:p11},
       {name: "Heihachi Mishima", id:"f12", img:p12},
       {name: "Anna Williams", id:"f13", img:p13},
       {name: "Mokujin", id:"f14", img:p14},
       {name: "Gun Jack", id:"f15", img:p15},
       {name: "Bryan Fury", id:"f16", img:p16},
       {name: "Kuma", id:"f17", img:p17},
       {name: "True Ogre", id:"f18", img:p18},
       {name: "Ogre", id:"f19", img:p19},
       {name: "Dr. Bosconovitch", id:"f20", img:p20}
     ],
     searchbar:''
    };
  }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(xyz => this.setState({ fighters : xyz }));
// }

render(){
  const {fighters, searchbar} = this.state;
  const searchedFighters = fighters.filter(sFighters => 
    sFighters.name.toLowerCase().includes(searchbar.toLowerCase()));
      return (
      <div className="App">
        <h1>Tekken</h1>
        <SearchBar placeholder="search fighters"
        handleChange={e => this.setState({searchbar : e.target.value})}/>
        <FighterCards fighters={searchedFighters}/>   
      </div>
    );
  }
}


export default App;
