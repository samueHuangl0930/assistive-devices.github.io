import React, { useEffect, useState } from "react";
import axios from "axios";

import ButtonComponent from "../../components/button/button";
import { Row, Col, Card, Input, List } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { AiOutlineCrown, AiOutlineUser } from "react-icons/ai";
import Slider from "react-slick";
import { Radio, Button, Menu, Layout } from 'antd';
import "./customer.less";

import _ from "lodash";



function Customer(props) {
    const { Header, Sider, Content } = Layout;
    const [size, setSize] = useState('large'); // default is 'middle'

    return (

        <div id="Customer">
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
                    <Input.Search size="middle" placeholder="手機號碼" enterButton />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '',
                                label: <div><p>VIP<br /><i>0900568789</i></p><AiOutlineCrown /></div>,
                            },
                            {
                                key: '1',
                                label: <div><p>普通<br /><i>0900568789</i></p><AiOutlineUser /></div>,
                            },
                            {
                                key: '2',
                                label: <div><p>普通<br /><i>0900568789</i></p><AiOutlineUser /></div>,
                            },
                            {
                                key: '3',
                                label: <div><p>普通<br /><i>0900568789</i></p><AiOutlineUser /></div>,
                            }, ,
                            {
                                key: '4',
                                label: <div><p>VIP<br /><i>0900568789</i></p><AiOutlineCrown /></div>,
                            },
                            {
                                key: '5',
                                label: <div><p>VIP<br /><i>0900568789</i></p><AiOutlineCrown /></div>,
                            },
                            {
                                key: '6',
                                label: <div><p>VIP<br /><i>0900568789</i></p><AiOutlineCrown /></div>,
                            },
                            {
                                key: '7',
                                label: <div><p>VIP<br /><i>0900568789</i></p><AiOutlineCrown /></div>,
                            }
                        ]}
                    />
                </div>
                <div className="commodity">
                    <Row>
                        <Col span={24} className="Customer-Information">
                            <Row className="Information-header">
                                <p>顧客資訊</p>
                            </Row>
                            <div className="Information-contain">
                                <div className="material">
                                    <ul>
                                        <li>姓名：<p>黃大銘</p></li>
                                        <li>手機：<p>0900123456</p></li>
                                        <li>E-mail：<p>0000000@gmail.com</p></li>
                                    </ul>
                                    <ul>
                                        <li>生日：<p>2022-03-22</p></li>
                                        <li>地址：<p>不公開</p></li>
                                        <li>性別：<p>女</p></li>
                                    </ul>
                                </div>
                                <div className="record">
                                    <p>多次消費紀錄</p>
                                    <p>無不良紀錄</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} className="Customer-Transaction">
                            <Row className="Transaction-header">
                                <p>顧客交易紀錄</p>
                            </Row>
                            <div className="Transaction-contain">
                                <List size="large" bordered>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>
                                    <List.Item><div className="time"><span ><p className="date">2023-02-22</p><p className="clock">18:32</p></span><i>5523698</i></div><div className="state"><p className="money">$4000</p><i>已付款</i></div></List.Item>

                                </List>



                            </div>
                        </Col>
                    </Row>

                </div>

            </Col>

        </div>
    );
}

export default Customer;

