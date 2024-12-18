import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

import Logo_Secundaria from '../assets/images/amos_logo_secundaria.png';

export default function Home() {

    document.title = 'AMÓS - Home';

    const [currentPhrase, setCurrentPhrase] = useState('');
    const mainPhrases = [
        'Como eu posso lhe ajudar?',
        'O que você deseja?',
        'O que você procura?',
        'Como posso lhe ajudar?',
        'O que você deseja fazer?',
        'O que você deseja encontrar?',
        'Como posso lhe ajudar hoje?',
        'O que você deseja fazer hoje?',
        'O que você deseja encontrar hoje?',
    ];

    useEffect(() => {
        setCurrentPhrase(mainPhrases[Math.floor(Math.random() * mainPhrases.length)]);
        const inputHomeMainInput = document.getElementById('inputHomeMainInput');
        if (inputHomeMainInput) inputHomeMainInput.focus();
    }, []);

    const pageVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: 50,
        },
    };

    const pageTransition = {
        type: 'spring',
        stiffness: 50,
        damping: 20,
    };

    return (
        <motion.div
            className={styles.divHome}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <img src={Logo_Secundaria} alt="Logo Secundária"/>
            <h1>{currentPhrase}</h1>
            <input id="inputHomeMainInput" name="inputHomeMainInput" type="text" placeholder='escreva aqui!'/>
        </motion.div>
    )
}