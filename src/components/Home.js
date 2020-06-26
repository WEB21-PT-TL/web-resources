import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  LinkOutlined,
  CheckOutlined,
  EyeOutlined,
  SettingOutlined,
  StarOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Videos from "./Videos";
import Links from "./Links";
import Bookmarks from "./Bookmarks";
import Interview from "./Interview";
import Feedback from "./Feedback";

const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <a href="#home">Home</a>
          </Menu.Item>
          <Menu.Item key="2" icon={<EyeOutlined />}>
            <a href="#frontend">Front End</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <a href="#backend">Back End</a>
          </Menu.Item>
          <Menu.Item key="4" icon={<YoutubeOutlined />}>
            <a href="#videos">Videos</a>
          </Menu.Item>
          <Menu.Item key="5" icon={<LinkOutlined />}>
            <a href="#links">Links</a>
          </Menu.Item>
          <Menu.Item key="6" icon={<StarOutlined />}>
            <a href="#bookmarks">Bookmarks</a>
          </Menu.Item>
          <Menu.Item key="7" icon={<CheckOutlined />}>
            <a href="#interview-prep">Interview Prep</a>
          </Menu.Item>
          {/* <Menu.Item key="8" icon={<QuestionOutlined />}>
            FAQ
          </Menu.Item> */}
          <Menu.Item key="9" icon={<MailOutlined />}>
            <a href="#feedback">Feedback</a>
          </Menu.Item>
          <Menu.Item key="9" icon={<UserOutlined />}>
            <a href="/login">Admin</a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <Search
            id="home"
            placeholder="Search"
            onSearch={(value) => console.log(value)}
            style={{ width: 300 }}
          />
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <FrontEnd />
            <BackEnd />
            <Videos />
            <Links />
            <Bookmarks />
            <Interview />
            <div>
              <Feedback />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
