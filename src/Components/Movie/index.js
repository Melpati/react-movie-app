import React from 'react'
import MovieList from './MovieList'


//const url=`https://www.omdbapi.com/?s=king&apikey=263d22d8`

class index extends React.Component{
    constructor(){
        super()
        this.state={
            movieDetails : [{
                Title:	"The Lord of the Rings: The Return of the King",
                Year:	"2003",
                imdbID:	"tt0167260",
                Type:	"movie",
                Poster:	"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                Title:	"The Lion King",
                Year:	"1994",
                imdbID:	"tt0110357",
                Type:	"movie",
                Poster:	"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
            }

            ]
        }
    }
    
    render(){
        return(
            <>
            <h2>Movie body </h2>
            {
                this.state.movieDetails.map((val) =>{
                    console.warn(val);
                   <div className="card">
                       <div className="card-img"><img src={val.Poster} /></div>
                       <div className="card-txt">
                           <h2>{val.Title}</h2>
                       </div>
                       
                   </div>
                })
            }
         
           </>
        )
    }
}

export default index