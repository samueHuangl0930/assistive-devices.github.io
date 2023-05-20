import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Card } from "antd";
// import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Radio, Button, Menu, Layout } from 'antd';
import "./commodity.less";

import _ from "lodash";



function Commodity(props) {
    const { Header, Sider, Content } = Layout;
    const [size, setSize] = useState('large'); // default is 'middle'

    return (

        <div id="Commodity">
            <nav style={{
                padding: 15,

            }}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="新增">新增</Radio.Button>
                    <Radio.Button value="刪除">刪除</Radio.Button>
                </Radio.Group>
            </nav>
            <Col className="contain">
                <div className="menuarea">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                label: '商品一',
                            },
                            {
                                key: '2',
                                label: '商品二',
                            },
                            {
                                key: '3',
                                label: '商品三',
                            }, ,
                            {
                                key: '4',
                                label: '商品四',
                            },
                            {
                                key: '5',
                                label: '商品五',
                            },
                            {
                                key: '6',
                                label: '商品六',
                            },
                            {
                                key: '7',
                                label: '商品七',
                            }
                        ]}
                    />
                </div>
                <div className="commodity">
                    商品
                </div>

            </Col>

        </div>
    );
}

export default Commodity;

