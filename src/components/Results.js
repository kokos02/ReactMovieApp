import React from 'react';
import Result from './Result';
import { motion } from "framer-motion";

function results({ results, getSelected }) {

    const animation = {
        hidden: { x: '-100vw' },
        show: {
            x: 0,
            transition: { duration: 0.2 }
        }, exit: {
            x: '100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    // we return a section which iterates through the results we get back
    //from the json to extract the result and the key which we pass to each single result we construct
    return (
        <motion.section className='results'
            variants={animation}
            initial="hidden"
            animate="show"
            exit="exit">
            {results.map((result, index) => (
                <Result key={result.id} result={result} getSelected={getSelected} index={index} arrayLength={results.length} />
            ))}
        </motion.section>
    )
}

export default results;
