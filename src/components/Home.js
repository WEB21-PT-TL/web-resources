import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  QuestionOutlined,
  LinkOutlined,
  CheckOutlined,
  EyeOutlined,
  SettingOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd";
import Videos from "./Videos";
import Links from "./Links";
import Bookmarks from "./Bookmarks";
import Interview from "./Interview";

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
            Home
          </Menu.Item>
          <Menu.Item key="1" icon={<EyeOutlined />}>
            Front End
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            Back End
          </Menu.Item>
          <Menu.Item key="3" icon={<YoutubeOutlined />}>
            Videos
          </Menu.Item>
          <Menu.Item key="7" icon={<LinkOutlined />}>
            Links
          </Menu.Item>
          <Menu.Item key="8" icon={<StarOutlined />}>
            Bookmarks
          </Menu.Item>
          <Menu.Item key="8" icon={<CheckOutlined />}>
            Interview Prep
          </Menu.Item>
          <Menu.Item key="6" icon={<QuestionOutlined />}>
            FAQ
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0, textAlign:'center' }}>
          {" "}
          <Search
            placeholder="Search"
            onSearch={(value) => console.log(value)}
            style={{ width: 400 }}
          />
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <FrontEnd/>
            <BackEnd/>
            <Videos/>
            <Links/>
            <Bookmarks/>
            <Interview/>
           </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
