import React, {Component, Fragment, useState, useEffect} from 'react';
import {Input, Button, Row, Col, message} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import copy from 'copy-to-clipboard';

import styles from './rgbConvertSixteen.module.less';

const RgbConvertSixteen = props => {

    const [rgbParam, setRgbParam] = useState(''); // 输入
    const [sixResult, setSixResult] = useState(''); // 结果

    // 输入框
    const changeRgbParam = e => {
        setRgbParam(e.target.value);
        setSixResult('');
    }
    // 转换事件
    const handleRgbConvert = () => {
        let _sixResult = JSON.parse(JSON.stringify(sixResult));
        if (rgbParam) {
            let _rgbParams = JSON.parse(JSON.stringify(rgbParam)).split(',');
            for (const item of _rgbParams) {
                if (item * 1 > 255 || item * 1 < 0) {
                    message.error('数字必须在0——255之间');
                    setSixResult('');
                    return
                }
            }
            if (_rgbParams.length !== 3) {
                message.error('RGB颜色值必须是三个数字');
                return
            };
            let _firstResult = (_rgbParams[0]*1).toString(16).length === 1 ? 0 + (_rgbParams[0]*1).toString(16) : (_rgbParams[0]*1).toString(16);
            let _secondResult = (_rgbParams[1]*1).toString(16).length === 1 ? 0 + (_rgbParams[1]*1).toString(16) : (_rgbParams[1]*1).toString(16);
            let _thirdResult = (_rgbParams[2]*1).toString(16).length === 1 ? 0 + (_rgbParams[2]*1).toString(16) : (_rgbParams[2]*1).toString(16);
            _sixResult = '#' + _firstResult.toUpperCase() + _secondResult.toUpperCase() + _thirdResult.toUpperCase();
            setSixResult(_sixResult);
        } else {
            setSixResult('');
        }
    };
    // 复制结果
    const copyResult = () => {
        copy(sixResult);
        message.info('复制成功');
    };
    // 绑定回车事件
    const onKeyPress = e => {
        if (e.nativeEvent.keyCode === 13) {
            handleRgbConvert();
        }
    };

    return (
        <div>
            <Row className={styles.card__title}>
                <span>RGB颜色值转换成十六进制颜色码：</span>
            </Row>
            <Row>
                <Col span={14}>
                    <Input
                        value={rgbParam}
                        onChange={changeRgbParam}
                        onKeyPress={onKeyPress}
                        style={{width: '180px'}}
                        placeholder="请输入，例：255,234,32"
                    />
                </Col>
                <Col span={7}>
                    <Button type='primary' onClick={handleRgbConvert}>转换</Button>
                </Col>
                <Col span={3}>
                    {
                      sixResult ? <section style={{background: sixResult, width: '100%', height: '100%'}}></section> : ''
                    }
                </Col>
            </Row>
            <Row style={{marginTop: '16px'}}>
                {
                    sixResult ? <span style={{fontSize: '18px'}}>{sixResult}  <CopyOutlined onClick={copyResult} style={{cursor: 'pointer'}} /></span> : ''
                }
            </Row>
        </div>
    )
}

export default RgbConvertSixteen;