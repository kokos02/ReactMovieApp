import React from 'react';
import { motion } from 'framer-motion'


function selectedMovie({ selected }) {

    const exitAnimation = {
        exit: {
            x: '-100vw',
            transition: { ease: 'anticipate' }
        }
    }

    let imageUrl;
    selected.poster_path ? imageUrl = `https://image.tmdb.org/t/p/original${selected.poster_path}` : imageUrl = "./images/noImage.jpg";
    return (
        <motion.section className='selectedMovie'
        variants={exitAnimation}
            exit="exit">
            <div className='content'>
                <div className='plot'>
                    <motion.img src={imageUrl} alt={selected.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: 1, duration: 1.2 }} />
                    <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{duration: 0.6 }}>{selected.title}</motion.h2>
                    <motion.p initial={{ y: '-100vw' }} animate={{ y: 0 }} transition={{duration: 1 }}>{selected.overview}</motion.p>
                    {(selected.release_date != null) ? <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>{selected.release_date.substring(0, 4)}</motion.h5> : false}
                </div>
            </div>
        </motion.section>
    )
}

export default selectedMovie;
