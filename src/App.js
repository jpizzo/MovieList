import React, { Component } from "react";
import "./App.css";
import "../data/data"
import List from "./List.js";

class App extends Component{

  render(){
    return(
      <div className="App">
        <div id="container">
	        <h1>Movie List</h1>
	        <div><List movieList={window.movies}/></div>
	      </div>
      </div>
    );
  }
}

export default App;