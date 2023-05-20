import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu, Space } from 'antd';


const { Search } = Input;
const onSearch = (value) => console.log(value);
const App = () => {


    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '',
                    label: <Space direction="vertical">
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        /></Space>,
                },
                {
                    key: '1',
                    label: '分類一',
                },
                {
                    key: '2',
                    label: '分類二',
                }, {
                    key: '3',
                    label: '分類三',
                }, {
                    key: '4',
                    label: '分類四',
                }, {
                    key: '5',
                    label: '分類五',
                },
            ]}
        />
    );
};

export default App;