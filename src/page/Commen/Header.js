import React, {Component} from 'react';

import styles from './Header.module.less';

const fanruanLogo = 'https://www.fanruan.com/images/logo-fanruan.png';

class Header extends Component {
    render () {
        return (
            <div className={styles.headerContainer}>
                <a href='https://www.fanruan.com' className={styles.logoContainer}>
                    <img
                        className={styles.logo}
                        alt='FANRUANLOGO'
                        src={fanruanLogo}
                    />
                </a>
            </div>
        );
    }
}

export default Header;