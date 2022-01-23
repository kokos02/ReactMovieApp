import React from 'react';

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
      </section>
  );
}

export default Search;
