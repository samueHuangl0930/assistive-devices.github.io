import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonComponent from "../../components/button/button";
// import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Row, Col, Radio, Layout, DatePicker, Space, Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "./sale.less";
import _ from "lodash";



function Sale(props) {
    const { Header, Sider, Content } = Layout;
    const [size, setSize] = useState('large'); // default is 'middle'
    const { RangePicker } = DatePicker;
    //table
    const columns = [
        {
            title: '訂單編號',
            width: 100,
            dataIndex: 'number',
            key: 'number',
            fixed: 'left',
        },
        {
            title: '訂單日期',
            width: 100,
            dataIndex: 'date',
            key: 'date',
            fixed: 'left',
        },
        {
            title: '訂單類型',
            dataIndex: 'type',
            key: '1',
            width: 150,
        },
        {
            title: '訂單產品',
            dataIndex: 'product',
            key: '2',
            width: 150,
        },
        {
            title: '數量/日',
            dataIndex: 'quantity',
            key: '3',
            width: 150,
        },
        {
            title: '價格',
            dataIndex: 'price',
            key: '4',
            width: 150,
        },
        {
            title: '購買人',
            dataIndex: 'customer',
            key: '5',
            width: 150,
        }
    ];
    const type = "type"
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            number: `number ${i}`,
            date: `date ${i}`,
            type: type,
            product: `product ${i}`,
            quantity: `quantity ${i}`,
            price: `price${i}`,
            customer: `customer${i}`,
        });
    }

    return (

        <div id="Sale">
            <nav style={{
                padding: 15,

            }}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="新增">新增</Radio.Button>
                    <Radio.Button value="刪除">刪除</Radio.Button>
                </Radio.Group>
                <div className="time">

                    <Space direction="vertical" size={12}>
                        <h2>銷售時間:</h2>
                        <RangePicker picker="month" />
                    </Space>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        產生報表
                    </Button>
                </div>
            </nav>
            <Col className="contain">
                <Table
                    columns={columns}
                    dataSource={data}
                />

            </Col>

        </div>
    );
}

export default Sale;

