import React from 'react';
import Result from './Result';

function results({ results, openPopup }) {
    // we return a section which iterates through the results we get back
    //from the json to extract the result and the key which we pass to each single result we construct
  return (
      <section className='results'>
          {results.map(result => (
              <Result key={result.id} result={result} openPopup={openPopup}/>
          ))}
      </section>
  )
}

export default results;
