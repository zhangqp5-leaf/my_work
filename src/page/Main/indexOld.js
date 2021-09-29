import React, { Component, Fragment } from 'react';
import {Table, Select, Button, Pagination} from 'antd';
import {
  CaretUpOutlined,
  StepBackwardOutlined,
} from '@ant-design/icons';

import styles from './index.module.less';

const {Option} = Select;

function descentCompare(p) {
  return (m, n) => m[p] > n[p] ? -1 : m[p] < n[p] ? 1 : 0;
}

function ascentCompare(p) {
  return (m, n) => m[p] > n[p] ? 1 : m[p] < n[p] ? -1 : 0
}

const columns = [
  {title: <span style={{fontWeight: 'bold'}}>仓库<CaretUpOutlined /></span>, dataIndex: 'storehouse', align: 'center', sorter: ascentCompare('storehouse')},
  {title: <span style={{fontWeight: 'bold'}}>快递</span>, dataIndex: 'expressDelivery', align: 'center', sorter: ascentCompare('expressDelivery')},
  {title: <span style={{fontWeight: 'bold'}}>省</span>, dataIndex: 'province', align: 'center', sorter: ascentCompare('province')},
  {title: <span style={{fontWeight: 'bold'}}>市</span>, dataIndex: 'city', align: 'center', sorter: ascentCompare('city')},
  {title: <span style={{fontWeight: 'bold'}}>区</span>, dataIndex: 'area', align: 'center', sorter: ascentCompare('area')},
  {title: <span style={{fontWeight: 'bold'}}>最后更新人</span>, dataIndex: 'lastPerson', align: 'center', sorter: ascentCompare('lastPerson')},
  {title: <span style={{fontWeight: 'bold'}}>最后更新时间</span>, dataIndex: 'lastTime', align: 'center', sorter: ascentCompare('lastTime')},
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    storehouse: `Edward King ${i}`,
    expressDelivery: 32,
    province: `London, Park Lane no. ${i}`,
    city: `city ${i}`,
    area: `area ${i}`,
    lastPerson: `lastPerson ${i}`,
    lastTime: `lastTime ${i}`,
  });
}
data.sort((m, n) => {
  if (m['lastTime'] > n['lastTime']) {
      return -1;
  } else if (m['lastTime'] < n['lastTime']) {
      return 1;
  } else {
      return 0;
  }
});

class NotDelivery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(data.storehouse);
    return (
      <Fragment>
        <div className={styles.select}>
          仓库：
          <Select placeholder="请选择" className={styles.select__right} >
            {
              data.map(item => {
                return (
                  <Option value={item.storehouse}>
                    {item.storehouse}
                  </Option>
                )
              })
            }
          </Select>
          快递：
          <Select placeholder="请选择" className={styles.select__right} >
            {
              data.map(item => {
                return (
                  <Option value={item.expressDelivery}>
                    {item.expressDelivery}
                  </Option>
                )
              })
            }
          </Select>
          地区：
          <Select placeholder="请选择" className={styles.select__right} >
            {
              data.map(item => {
                return (
                  <Option value={item.area}>
                    {item.area}
                  </Option>
                )
              })
            }
          </Select>
          <Button className={styles.select__button__right} type="primary">查询</Button>
          <Button>导出明细</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10, showQuickJumper: true, showTotal: (total, range) => {
            return `共 ${total} 条记录 第 ${Math.floor(range[1] / 10)} / ${Math.floor((total / 10))} 页`
          } }}
        />
      </Fragment>
    )
  }
}

export default NotDelivery;