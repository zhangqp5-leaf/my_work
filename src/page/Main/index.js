import React, {Component, Fragment, useState, useEffect} from 'react';
import {Input, Button, Card} from 'antd';
import RgbConvertSixteen from './rgbConvertSixteen/rgbConvertSixteen';
import SixteenConvertRgb from './sixteenConvertRgb/sixteenConvertRgb';

import styles from './index.module.less';

const Main = props => {
    return (
        <div className={styles.main__style}>
            <Card className={styles.main__style__card}>
                <RgbConvertSixteen />
            </Card>
            <Card className={styles.main__style__card}>
                <SixteenConvertRgb />
            </Card>
        </div>
    );
};

export default Main;