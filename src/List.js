import React, { Component } from "react";
import ListEntry from "./ListEntry"

class List extends Component{

	render(){

	  return(
		  <div className="List">
		    <table id="movie-list">
			    {this.props.movieList.map(movie => 
			    	<ListEntry movie={movie} />
			      )}
		    </table>
		  </div>
	  )
	}
}

export default List;