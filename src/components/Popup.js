import React from 'react';

function Popup({ selected, closePopup}) {
    let imageUrl;
    selected.poster_path ? imageUrl = `https://image.tmdb.org/t/p/original${selected.poster_path}`: imageUrl ="./images/noImage.jpg";
  return (
      <section className='popup'>
          <div className='content'>
              <h2>{selected.title}</h2>
              <div className='plot'>
                  <img src={imageUrl} alt={selected.title}/>
                  <p>{selected.overview}</p>
              </div>
              <button className="close" onClick={closePopup}>Close</button>
          </div>
      </section>
  )
}

export default Popup;
