import React, { Component } from "react";


class ListEntry extends Component{

	render(){
		console.log('movie', this.props.movie)
	  return(
		  <tr>
		    <div className="ListEntry"><p>{this.props.movie.title}</p></div>
		  </tr>
	  )
	}
}

export default ListEntry;