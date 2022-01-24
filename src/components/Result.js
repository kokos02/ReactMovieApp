import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';


//Here we construct each result by extracting its image url and title

function Result({ result, openPopup }) {
    let imageUrl;
    result.poster_path ? imageUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`: imageUrl ="./images/noImage.jpg";
    //Here we render the image and the title and if clicked we pass the id of the movie to the opePopup
  return (
      <motion.div initial={{x:'100vw'}} animate={{x:0}} transition={{duration:0.5}} className='resultContainer'> 
      <div className='image' onClick={() => openPopup(result.id)}> 
        <motion.img className='resultImage' src={imageUrl} alt={result.title} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6, duration:1.6}}/>
        </div>
        <Link to={"/result"}>
        <div className='text' onClick={() => openPopup(result.id)}> 
        <h3>{result.title}</h3>
        <p>{result.overview}</p>
        {(result.release_date != null) ? <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:1}}>{result.release_date.substring(0, 4)}</motion.p> : false}
      </div>
      </Link>
      </motion.div>
  )
}

export default Result;
