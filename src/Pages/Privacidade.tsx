import styles from './Privacidade.module.css';
import { motion } from 'framer-motion';

export default function Privacidade() {

    document.title = 'AMÓS - Privacidade';

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
            className={styles.divPrivacidade}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1>Política de Privacidade</h1>
            <p>
                Bem-vindo à nossa página de Política de Privacidade. Sua privacidade é importante para nós.
                Leia os detalhes abaixo para entender como lidamos com seus dados.
            </p>

            <section>
                <h2>1. Coleta de Dados</h2>
                <p>
                    Coletamos informações fornecidas por você, como nome, e-mail e preferências, para melhorar sua experiência com nossos serviços.
                </p>
            </section>

            <section>
                <h2>2. Uso de Dados</h2>
                <p>
                    Os dados coletados são utilizados para:
                </p>
                <ul>
                    <li>Personalizar sua experiência.</li>
                    <li>Melhorar nossos serviços.</li>
                    <li>Comunicar novidades e atualizações.</li>
                </ul>
            </section>

            <section>
                <h2>3. Compartilhamento de Dados</h2>
                <p>
                    Não compartilhamos suas informações com terceiros, exceto quando exigido por lei
                    ou necessário para o fornecimento de nossos serviços.
                </p>
            </section>

            <section>
                <h2>4. Seus Direitos</h2>
                <p>
                    Você pode solicitar a exclusão ou modificação dos seus dados a qualquer momento.
                    Para isso, entre em contato conosco através do nosso suporte.
                </p>
            </section>
 
            <section>
                <h2>5. Alterações na Política</h2>
                <p>
                    Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento.
                    As alterações serão comunicadas através de nossos canais oficiais.
                </p>
            </section>

            <section>
                <h2>6. Contato</h2>
                <p>
                    Para mais informações, entre em contato conosco através pelo WhatsApp ou redes sociais!
                </p>
            </section>
        
            <section>
                <h2>7. Dados sensíveis</h2>
                <p>
                    Este projeto é para portfólio, então não coloque dados pessoais ou sensíveis aqui, caso você não queira que sejam expostos.
                </p>
            </section>
        </motion.div>
    )
}