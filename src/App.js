
import React, {useState} from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";



function App() {
  //Initial state with empty search term, no results and no selected movie
  const [state,setState] = useState({
    searchTerm:"",
    results: [],
    selected: {}
  });

  const apiSearchUrl = "https://api.themoviedb.org/3/search/movie?api_key=7571f95c4f6609d01653729cc9782985";
  const apiIdUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey ="?api_key=7571f95c4f6609d01653729cc9782985";

  //Search procedure, we apend the term to the end of the url and then we fill the relults table with the new results
  const search = (e) =>{
    if (e.key === "Enter" || e.type == "click") {
      axios(apiSearchUrl + "&query=" + state.searchTerm).then(({ data }) => {
        let results = data.results;

        setState(prevState => {
          return{...prevState, results: results}
        })
      });
    }
  }

  const handleInput = (e) => {
    let searchTerm = e.target.value; // we get the value from the searchBox

    //We take the previous state and we just update the search term
    setState(prevState => {
      return{...prevState, searchTerm: searchTerm}
    });

  }

  //When selecting a movie we make a request with the movie id to fetch the info we need to display on the window, we give the selected movie to the selected object
  const openPopup = id => {
    axios(apiIdUrl + id + apiKey).then(({data})=>{
      let result = data;

      setState(prevState =>{
        return{...prevState, selected: result}
      });
    });
  }

  //Here we empty the selected array
  const closePopup = () =>{
    setState(prevState => {
      return{...prevState, selected: {}}
    });
  }
  
  return (
    <div className="App">
      <header>
       <motion.h1 initial={{y:'100vw'}} animate={{y:0}} transition={{duration:1}}>Movies Flix</motion.h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/> {/* results inherited from Results component */}

        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false}
      </main>
    </div>
  );
}

export default App
