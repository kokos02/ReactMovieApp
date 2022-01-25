import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


//Here we construct each result by extracting its image url and info
function Result({ result, getSelected, index, arrayLength }) {

  let imageUrl;
  result.poster_path ? imageUrl = `https://image.tmdb.org/t/p/original${result.poster_path}` : imageUrl = "./images/noImage.jpg"; // If there is no image we put a no image, image.

  //Here we render the image and the title and if clicked we pass the id of the movie to the selectedMovie
  return (

    <motion.div whileHover={{ scale: 1.05, originX: 0, color: '#fff' }} className='resultContainer'>

      <Link to={"/result"}>
        <motion.div className='image' onClick={() => getSelected(result.id)}>
          <motion.img className='resultImage' src={imageUrl} alt={result.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index, duration: 1.8 }} />
        </motion.div>
      </Link>

      <Link to={"/result"}>
        <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: index - 0.5, duration: 0.3 }} className='text' onClick={() => getSelected(result.id)}>
          <h3>{result.title}</h3>
          <p>{result.overview}</p>
          {(result.release_date != null) ? <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: arrayLength - 0.5, duration: 1 }}>{result.release_date.substring(0, 4)}</motion.p> : false}
        </motion.div>
      </Link>

    </motion.div>
  )
}

export default Result;
