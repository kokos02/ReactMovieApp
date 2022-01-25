
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Search from "./components/Search";
import Results from "./components/Results";
import SelectedMovie from "./components/selectedMovie";
import Home from "./components/Home";

// let history = useHistory();
// history.push("/search");


function App() {
  //Initial state with empty search term, no results and no selected movie
  const [state, setState] = useState({
    searchTerm: "",
    results: [],
    selected: {}
  });

  const apiSearchUrl = "https://api.themoviedb.org/3/search/movie?api_key=7571f95c4f6609d01653729cc9782985";
  const apiIdUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "?api_key=7571f95c4f6609d01653729cc9782985";
  const PopularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=7571f95c4f6609d01653729cc9782985&language=en-US&page=1"

  //Search procedure, we apend the term to the end of the url and then we fill the relults table with the new results
  const search = e => {
    if (e.key === "Enter" || e.type === "click") {

      axios(apiSearchUrl + "&query=" + state.searchTerm).then(({ data }) => {
        let results = data.results;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const getPopular = () => {
    axios(PopularUrl).then(({ data }) => {
      let results = data.results;

      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  }

  useEffect(() => {
    getPopular();
  }, []);

  const handleInput = e => {
    let searchTerm = e.target.value; // we get the value from the searchBox

    //We take the previous state and we just update the search term
    setState(prevState => {
      return { ...prevState, searchTerm: searchTerm }
    });

  }

  //When selecting a movie we make a request with the movie id to fetch the info we need to display on the window, we give the selected movie to the selected object
  const getSelected = id => {
    axios(apiIdUrl + id + apiKey).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to={"/"} onClick={() => getPopular()}>
            <motion.h1 initial={{ y: '100vw' }} animate={{ y: 0 }} transition={{ duration: 1 }}>Movies Flix</motion.h1>
          </Link>
        </header>
        <main>
          <Routes>

            <Route exact path="/" element={<><Search handleInput={handleInput} search={search} />
              <Results results={state.results} getSelected={getSelected} /></>} />

            <Route path="/result" element={<>{(typeof state.selected.title != "undefined") ? <SelectedMovie selected={state.selected} /> : false}</>} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
