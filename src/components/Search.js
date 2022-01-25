import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import { motion } from "framer-motion";


const scaleEffect ={
  hover: {
    scale: 1.05,
    transition:{
      duration: 0.3,
      yoyo: 2
    }
  }
}

//When typing we update the result through the handleInput function
//and when pressing enter we search for the results
function Search ({ handleInput, search }) {
  return (
      <motion.section variants={scaleEffect} whileHover='hover' className='searchbox-wrap'>
            <input type="text" 
            placeholder="Search Movies" 
            className="searchBox" 
            onChange={handleInput} 
            onKeyPress={search}/>
            <button type="submit" className="searchButton" onClick={search}>
            <FontAwesomeIcon icon={faSearch} />
           </button>
      </motion.section>
  );
}

export default Search;
