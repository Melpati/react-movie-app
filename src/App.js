import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Head from "./Components/Head";
import Movie from './Components/Movie'

class App extends React.Component {
  render() {
    return (
      <>
        <Head />
        <Movie />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
