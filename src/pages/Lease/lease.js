import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import ButtonComponent from "../../components/button/button";
// import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Row, Col, Radio, Button, Menu, Layout, Table } from 'antd';
import "./lease.less";

import _ from "lodash";



function Lease(props) {
    const [size, setSize] = useState('large'); // default is 'middle'
    const columns = [
        {
            title: '租賃編號',
            width: 100,
            dataIndex: 'number',
            key: 'number',
            fixed: 'left',
        },
        {
            title: '租賃日期',
            width: 100,
            dataIndex: 'date',
            key: 'date',
            fixed: 'left',
        },
        {
            title: '租賃類型',
            dataIndex: 'type',
            key: '1',
            width: 150,
        },
        {
            title: '租賃產品',
            dataIndex: 'product',
            key: '2',
            width: 150,
        },
        {
            title: '時/日',
            dataIndex: 'quantity',
            key: '3',
            width: 150,
        },
        {
            title: '已支付',
            dataIndex: 'price',
            key: '4',
            width: 150,
        },
        {
            title: '租賃人',
            dataIndex: 'customer',
            key: '5',
            width: 150,
        }
    ];

    const data = [];

    for (let i = 1; i <= 100; i++) { 
        // if (res['type'] == ) 
        
        data.push({
            key: i,
            number: `number ${i}`,
            date: `date ${i}`,
            type: "type",
            product: `product ${i}`,
            quantity: `quantity ${i}`,
            price: `price${i}`,
            customer: `customer${i}`,
        });
    }

    // var item_value = 555;
    // var value = 777;

    // localStorage.setItem("item_key", item_value);
    // sessionStorage.setItem("item_key", value);
    // Assign value to a key   
    return (

        <div id="Lease">
            <nav style={{
                padding: 15,

            }}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="出租">出租</Radio.Button>
                    <Radio.Button value="已歸還">已歸還</Radio.Button>
                </Radio.Group>
                <p>出租中</p>
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

export default Lease;

