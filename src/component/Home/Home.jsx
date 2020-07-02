import React from 'react'
import styles from './Home.module.scss'
import swotifyLogo from '../../images/swotifyLogo.png'

import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={swotifyLogo} alt='logo'/>
                    <h3 className={styles.name}>SWOTIFY</h3>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>DISCOVER</div>
                    <div className={styles.item}>JOIN</div>
                </div>
            </header>
            <div className={styles.mainSection}>
                <div className={styles.introContainer}>
                    <h1 className={styles.intro}>Welcome To Swotify</h1>
                    <h3 className={styles.subIntro}>Listen To Your Favorite Songs With A Single Click</h3>
                    <Link className={styles.link} to='/webplayer'>
                        OPEN WEB BROWSER
                    </Link>
                    
                </div>
                <div className={styles.jCole}></div>
            </div>
        </div>
    )
}

export default Home;
