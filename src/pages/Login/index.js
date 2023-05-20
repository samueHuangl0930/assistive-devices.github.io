import React, { useState, useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { HashRouter, redirect, Route } from "react-router-dom";
import { Row, Col, Button, Checkbox, Form, Icon, Input, Space } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import ButtonComponent from "../../components/button/button";
import { AiOutlineUser } from "react-icons/ai";
import images from "../../config/images";
import { useNavigate } from "react-router-dom";
import "./index.less";
import { useRef } from "react";


function Login() {
  const navigate = useNavigate();
  var csrftokenid = "";
  const onFinish = (values) => {
    const config = {
      url: "http://127.0.0.1:8000/api/login", // 只有此為必需
      method: "post", // 大小寫皆可
      headers: {
        Accept: "text/html",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'X-Requested-With': 'XMLHttpRequest',
        "X-CSRF-TOKEN": csrftokenid,
      },
      data: values,
      responseType: 'json' // 伺服器回應的數據類型
    };
    try {
      axios(config)
        .then(res => {
          console.log(res.data.status)
          localStorage.setItem('token', res.data.userToken);
          sessionStorage.setItem('token', res.data.userToken);
          if ((res.data.status == true)) {
            navigate("Home")
          } else {

            window.confirm("message");
          }
          // setPosts(values)
        }, []);
    } catch (error) {
      throw error;
      // Do  with error
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);

  };









  return (
    <div id="login">
      <Row className="container">
        <Row
          className="bannerBlock1"
          type="flex"
          justify="center"
          align="middle"
        >

          <Col xl={9} md={18} sm={20} xs={24} className="titleBlock">
            <Row type="flex" justify="center">
              <Col span={24} className="logo">
                <img src={images.logo2} />
              </Col>


              <Col sm={20} md={15} lg={14} className="formWarp">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  // onClick={login}
                  autoComplete="off"
                  className="form"
                >
                  <Row className="FormContent">
                    <Col span={24} className="inputbox">

                      <Form.Item
                        wrapperCol={{ span: 24 }}
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Username"

                        />
                      </Form.Item>
                    </Col>

                    <Col span={24} className="inputbox" >

                      <Form.Item
                        wrapperCol={{ span: 24 }}
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>

                    </Col>
                  </Row>

                  <Row className="loginformbtn" justify="center"
                    align="middle">
                    <Form.Item
                      className="btndiv"
                      wrapperCol={{ span: 24 }}
                    >
                      <ButtonComponent
                        text="登入"
                        size="large"
                        name="loginbtn"
                        htmlType="submit"
                        type="primary"
                      />
                    </Form.Item>
                    <Form.Item
                      className="btndiv"
                      wrapperCol={{ span: 24 }}
                      type="flex"
                      justify="center"
                      align="center"
                    >
                      <ButtonComponent
                        text="重設"
                        size="large"
                        name="reset"
                        htmlType="submit"
                        type="primary"
                      />
                    </Form.Item>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Login;
