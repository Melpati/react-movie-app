import React from "react";

class MovieList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>Movie List Component</h1>
            <h1>{this.props.data.Title}</h1>

            </>
        )
    }
}
export default MovieList