import React from 'react';
import Result from './Result';
import { motion } from "framer-motion";

function results({ results, getSelected }) {

    const exitAnimation = {
        exit: {
            x: '100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    // we return a section which iterates through the results we get back
    //from the json to extract the result and the key which we pass to each single result we construct
    return (
        <motion.section className='results'
            variants={exitAnimation}
            exit="exit">
            {results.map(result => (
                <Result key={result.id} result={result} getSelected={getSelected} />
            ))}
        </motion.section>
    )
}

export default results;
