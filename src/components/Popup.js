import React from 'react';
import { motion } from 'framer-motion'

function Popup({ selected, closePopup }) {
    let imageUrl;
    selected.poster_path ? imageUrl = `https://image.tmdb.org/t/p/original${selected.poster_path}` : imageUrl = "./images/noImage.jpg";
    return (
        <section className='popup'>
            <div className='content'>
                <div className='plot'>
                    <img src={imageUrl} alt={selected.title} />
                    <h2>{selected.title}</h2>
                    <p>{selected.overview}</p>
                    {(selected.release_date != null) ? <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>{selected.release_date.substring(0, 4)}</motion.h5> : false}
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup;
