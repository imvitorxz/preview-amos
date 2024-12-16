import { useState, useEffect } from 'react';
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
    }, []);

    return (
        <div className={styles.divHome}>
            <img src={Logo_Secundaria} alt="Logo Secundária"/>
            <h1>{currentPhrase}</h1>
            <input id="inputHomeMainInput" name="inputHomeMainInput" type="text" placeholder='escreva aqui!'/>

        </div>
    )
}