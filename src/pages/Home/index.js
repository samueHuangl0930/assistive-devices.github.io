import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Card } from "antd";
import { Radio, Button, Menu, Layout } from 'antd';
import "./index.less";
import _ from "lodash";



function Home(props) {
  const { Header, Sider, Content } = Layout;
  const [size, setSize] = useState('large'); // default is 'middle'

  return (

    <div id="Home">
      <nav style={{
        padding: 15,

      }}>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="租賃">租賃</Radio.Button>
          <Radio.Button value="購買">購買</Radio.Button>
        </Radio.Group>
        <Button>手動輸入</Button>
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

        </div>

      </Col>

    </div>
  );
}

export default Home;

