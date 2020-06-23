import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  VideoCameraOutlined,
  PaperClipOutlined,
  SnippetsOutlined,
  ExclamationOutlined,
  QuestionOutlined,
  LinkOutlined,
  CheckOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  return (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Videos
        </Menu.Item>
        <Menu.Item key="3" icon={<PaperClipOutlined />}>
          Docs
        </Menu.Item>
        <Menu.Item key="4" icon={<SnippetsOutlined />}>
          Material
        </Menu.Item>
        <Menu.Item key="5" icon={<ExclamationOutlined />}>
          Important
        </Menu.Item>
        <Menu.Item key="6" icon={<QuestionOutlined />}>
          FAQ
        </Menu.Item>
        <Menu.Item key="7" icon={<LinkOutlined />}>
          Links
        </Menu.Item>
        <Menu.Item key="8" icon={<CheckOutlined />}>
          Interview Prep
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )};