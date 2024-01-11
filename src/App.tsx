import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import Home from './Home';
import Register from './Register';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout className="layout" style={{ backgroundColor: "white" }}>
    <Header
       style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Link to="/">
            <Button
          style={{
            borderColor: "black",
            backgroundColor: "Black",
            marginTop: "48px",
            width: "90px",
            height: "90px",
            display: "flex",
            color: "white",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          shape="circle"
          size={"large"}
        >
          logo
        </Button>
            </Link>
            <span
          style={{
            color: "#2a4b6a",
            display:"flex",
            textAlign: "center",
            marginTop: "60px",
            fontSize: "25px",
            marginLeft: "1086px", // ปรับเพิ่มนี้
            marginRight: "auto", // ปรับเพิ่มนี้
          }}
        >
          HOME
        </span>
            <Link to="/register">
            <Button
          style={{
            borderColor: "#2a4b6a",
            backgroundColor: "#2a4b6a",
            color: "white",
            display: "flex",
            marginTop: "48px",
            marginLeft: "980px",
            fontSize: "20px",
            width: "180px",
            height: "70px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          shape="round"
          size={"large"}
        >
          Sign in
        </Button>
            </Link>
        </Menu>
        </Header>

      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Content>

    </Layout>
  </Router>
);

export default App;