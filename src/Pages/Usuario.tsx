import styles from './Usuario.module.css';

import Img_User from '../assets/icons/icon_user.png';

export default function Usuario() {
    return (
        <div className={styles.divUsuario}>
            <img src={Img_User} className={styles.imgPerfil} alt="Icone usuario"/>
            <h2>Usuário</h2>
            <h3>Nome</h3>
            <h2>Senha</h2>
            <input id="inputUsuarioSenha" name="inputUsuarioSenha" type="password"/>
            <h2>Bio</h2>
            <input id={styles.inputUsuarioBio} name="inputUsuarioBio" type="text"/>
            <h2>Objetivos</h2>
            <ul>
                <li>Objetivo 1</li>
                <li>Objetivo 2</li>
                <li>Objetivo 3</li>
            </ul>
        </div>
    )
}