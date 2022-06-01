import React, {Component, Fragment, useState, useEffect} from 'react';
import {Input, Button, Row, Col, message} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import copy from 'copy-to-clipboard';

import styles from './sixteenConvertRgb.module.less';

const SixteenConvertRgb = props => {

    const [sixteenParam, setSixteenParam] = useState('');
    const [rgbResult, setRgbResult] = useState('');

    const changeSixteenParam = e => {
        setSixteenParam(e.target.value);
        setRgbResult('');
    };
    const handleSixteenConvert = () => {
        let _rgbResult = JSON.parse(JSON.stringify(rgbResult));
        if (sixteenParam) {
            if (sixteenParam.length !== 7) {
                message.error('十六进制颜色编码必须为7位');
                return
            };
            let _sixteenParam = JSON.parse(JSON.stringify(sixteenParam)).split('');
            let _firstResult = parseInt(_sixteenParam[1] + _sixteenParam[2], 16);
            let _secondResult = parseInt(_sixteenParam[3] + _sixteenParam[4], 16);
            let _thirdResult = parseInt(_sixteenParam[5] + _sixteenParam[6], 16);
            _rgbResult = _firstResult + ',' + _secondResult + ',' + _thirdResult;
            setRgbResult(_rgbResult);
        } else {
            setRgbResult('');
        };
    };
    // 复制结果
    const copyResult = () => {
        copy(rgbResult);
        message.info('复制成功');
    };
    // 绑定回车事件
    const onKeyPress = e => {
        if (e.nativeEvent.keyCode === 13) {
            handleSixteenConvert();
        }
    };

    return (
        <div>
            <Row className={styles.card__title}>
                <span>十六进制颜色码转换成RGB颜色值：</span>
            </Row>
            <Row>
                <Col span={14}>
                    <Input
                        value={sixteenParam}
                        onChange={changeSixteenParam}
                        onKeyPress={onKeyPress}
                        style={{width: '180px'}}
                        placeholder="请输入，例：#FFFF00"
                    />
                </Col>
                <Col span={7}>
                    <Button type='primary' onClick={handleSixteenConvert}>转换</Button>
                </Col>
                <Col span={3}>
                    {
                        rgbResult ? <section style={{background: sixteenParam, width: '100%', height: '100%'}}></section> : ''
                    }
                </Col>
            </Row>
            <Row style={{marginTop: '16px'}}>
                {
                    rgbResult ? <span style={{fontSize: '18px'}}>{rgbResult}  <CopyOutlined onClick={copyResult} style={{cursor: 'pointer'}} /></span> : ''
                }
            </Row>
        </div>
    );
};

export default SixteenConvertRgb;