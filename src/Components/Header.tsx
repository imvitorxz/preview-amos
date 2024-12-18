import { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';

import Logo_Principal from '../assets/images/amos_logo_principal.png';
import Icone_Pages from '../assets/icons/icon_pages.png';



export default function Header() {
    
    const [menuPagesVisible, setMenuPagesVisible] = window.innerWidth > 1024 ? useState(true) : useState(false);
    const displayMenuPages = window.innerWidth > 1024 ? 'flex' : 'block';

    const location = useLocation();

    function handleMenuPagesVisible() { setMenuPagesVisible(!menuPagesVisible); }
  
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setMenuPagesVisible(false);
        }
    }, []);

    useEffect(() => {
        setMenuPagesVisible(false);
    }, [location]);

    return (
        <header>
            <div className={styles.divHeaderLeft}> 
                <img src={Icone_Pages} onClick={() => handleMenuPagesVisible()} className={styles.imgIcons} alt="Icone pages"/>
                <Link to="/"><img src={Logo_Principal} alt="Logo Principal"/></Link>
                <Link to="/"><h1>AMÓS</h1></Link>
            </div>
            <div className={styles.divHeaderCenter}>
                <AnimatePresence>
                    {menuPagesVisible && (
                        <motion.ul 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{ display: displayMenuPages }}
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/conversas">Conversas</Link></li>
                            <li><Link to="/usuario">Usuário</Link></li>
                            <li><Link to="/privacidade">Privacidade</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className={styles.divHeaderRight}>
                <input id="inputHeaderSearch" name="inputHeaderSearch" type="text" placeholder='o que você procura?'/>
            </div>
        </header>
    )
}