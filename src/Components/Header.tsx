import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import Logo_Principal from '../assets/images/amos_logo_principal.png';
import Icone_Pages from '../assets/icons/icon_pages.png';
import Icone_User from '../assets/icons/icon_user.png';


export default function Header() {
    return (
        <header>
            <div className={styles.divHeaderLeft}> 
                <img src={Icone_Pages} className={styles.imgIcons} alt="Icone pages"/>
                <img src={Logo_Principal} alt="Logo Principal"/>
            </div>
            <div className={styles.divHeaderCenter}>
                <ul>
                    <li>Home</li>
                    <li>Conversas</li>
                    <li>Usuário</li>
                    <li>Privacidade</li>
                    <li>Sobre</li>
                </ul>
            </div>
            <div className={styles.divHeaderRight}>
                <img src={Icone_User} className={styles.imgIcons} alt="Icone usuario"/>
                <input id="inputHeaderSearch" name="inputHeaderSearch" type="text" placeholder='o que você procura?'/>
            </div>
        </header>
    )
}