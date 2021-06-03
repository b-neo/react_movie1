import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from './Movies';
import './App.css'

class App extends React.Component{
  state = {
    movies : [],
    temp : "가",
    loading : true
  }
  getMovies = async () => {
    const {data : { data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, loading : false})
    console.log(movies)
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    
    const {movies, loading} = this.state;
    return <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">로딩 중</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map( movie => (
            <Movie 
              key={movie.id} 
              name={movie.title} 
              year={movie.year} 
              poster={movie.medium_cover_image} 
              rating={movie.rating} 
              summary={movie.summary} 
              genres={movie.genres}
              />
              
          ))}
        </div>
    )}
    </section>
  }
}

export default App;
