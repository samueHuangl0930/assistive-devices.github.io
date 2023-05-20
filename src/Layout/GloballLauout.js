import React, { useEffect, useState } from 'react';
import {
    HomeOutlined,
    UserOutlined,
    DollarOutlined,
    TransactionOutlined,
    ShopOutlined,
    CarryOutOutlined,
    TagsOutlined,
    NumberOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UploadOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Radio, Breadcrumb, Button } from 'antd';
import "./GloballLayout.less";
import "../assets/style/theme.less";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import images from "../../src/config/images.js";
const { Header, Sider, Content } = Layout;

const App = (props) => {
    const [collapsed, setCollapsed] = useState(false);


    const location = useLocation();


    return (
        <Layout id="global">
            <Sider trigger={null} collapsible collapsed={collapsed} >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                   
                    items={[
                        {
                            key: '/Home',
                            icon: <HomeOutlined />
                            ,
                            label:
                                <NavLink to="Home" style={({ isActive }) => ({
                                    color: isActive ? '#F6F4F5' : '#5A5B5A',
                                })}>
                                    首頁
                                </NavLink>,
                        },
                        {
                            key: '/customer',
                            icon: <UserOutlined />,
                            label:
                                <NavLink to="customer" style={({ isActive }) => ({
                                    color: isActive ? '#F6F4F5' : '#5A5B5A'

                                })}>
                                    顧客
                                </NavLink>,
                        },
                        {
                            key: '/Sale',
                            icon: <DollarOutlined />,
                            label: <NavLink to="Sale" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                銷售
                            </NavLink>,
                        }, {
                            key: '/Lease',
                            icon: <TransactionOutlined />,
                            label: <NavLink to="Lease" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                租賃
                            </NavLink>,
                        }, {
                            key: '/Purchase',
                            icon: <ShopOutlined />,
                            label: <NavLink to="Purchase" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                進出貨
                            </NavLink>,
                        }, {
                            key: '/Inventory',
                            icon: <CarryOutOutlined />,
                            label: <NavLink to="Inventory" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                庫存
                            </NavLink>,
                        }, {
                            key: '/Commodity',
                            icon: <TagsOutlined />,
                            label: <NavLink to="Commodity" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                商品
                            </NavLink>,
                        }, {
                            key: '/Supplier',
                            icon: <NumberOutlined />,
                            label: <NavLink to="Supplier" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                供應商
                            </NavLink>,
                        }, {
                            key: '/',
                            icon: <LogoutOutlined className='logoutimg' />,
                            label: <NavLink to="/" style={({ isActive }) => ({
                                color: isActive ? '#F6F4F5' : '#5A5B5A'

                            })}>
                                登出
                            </NavLink>,
                            className: 'logout'
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header>

                    <header>

                        <div className='header-right'>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                            <div className='logo'>
                                <img src={images.logo} />
                            </div>
                        </div>

                        <div className='employee'>
                            <Avatar shape="square" size={50} icon={<img src={images.pepole3} />} />
                            <span><p >1110734029</p><p>黃大銘</p></span>
                        </div>
                    </header>
                </Header>
                <Layout >
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;