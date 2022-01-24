import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 


//When typing we update the result through the handleInput function
//and when pressing enter we search for the results
function Search ({ handleInput, search }) {
  return (
      <section className='searchbox-wrap'>
            <input type="text" 
            placeholder="Search Movies" 
            className="searchBox" 
            onChange={handleInput} 
            onKeyPress={search}/>
            <button type="submit" className="searchButton" onClick={search}>
            <FontAwesomeIcon icon={faSearch} />
           </button>
      </section>
  );
}

export default Search;
