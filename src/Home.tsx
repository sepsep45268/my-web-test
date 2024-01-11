import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import Register from './Register';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const Home: React.FC = () => (
    <div>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Card
            style={{
              marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "auto",
          borderColor: "white",
          width: "100%", // ทำให้ Card มีความกว้างเต็มขอบ
            }}
            cover={
              <img
                alt="example"
                src="https://storage.googleapis.com/theluxenomad-python.appspot.com/uploads/top_destinations/samui_main.png"
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "100%", // ทำให้รูปเต็มทั้งกว้าง
                  height: "100%", // ทำให้รูปเต็มทั้งสูง
                }}
              />
            }
          ></Card>
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              className="bold-text"
              style={{
                color: "#2a4b6a",
                textAlign: "center",
                marginTop: "5px",
                fontSize: "25px",
              }}
            >
              Lorem ipsum
            </span>
          </Content>
        </div>
      </Content>
      <Row style={{ textAlign: "center", marginTop: "50px", fontSize: "25px" }}>
        <Col span={5} style={{ marginLeft: "300px" }}>
          <Card
            hoverable

            style={{
              width: 440,
            }}
            cover={
              <img
                alt="example"
                src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.15752-9/414130793_1128544385187058_5409450072224124556_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHlxDqoHgOLw7l18FEu3rVZM7RLXuSDGUAztEte5IMZQGR4w8LAQGuL3RISID8B_zmfqVeTXdgPQ4sPclQJhMZg&_nc_ohc=e6QQHus8wosAX_wGvnb&_nc_ht=scontent.fbkk5-7.fna&oh=03_AdQ3qgPKsi7eSmnIbIclGOHRxtTbtK7UkdmIVoQJbacfMA&oe=65C6FC25"
              />
            }
          >
            <Meta title="Lorem ipsum" description="One-stop Platform community for
            Agents and Operator in Thailand." />
            <Button
              style={{
                borderColor: "#2a4b6a",
                backgroundColor: "#2a4b6a",
                color: "white",
                display: "flex",
                marginTop: "80px",
                marginLeft: "104px",
                fontSize: "20px",
                width: "180px",
                height: "70px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              shape="round"
              size={"large"}
            >
              Buy package
            </Button>
          </Card>
        </Col>
        <Col span={5}>
        <Card
            hoverable

            style={{ 
              width: 440,
            }}
            cover={
              <img
              className='mt-2'
                alt="example"
                src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.15752-9/413926482_2016061548766650_1389705529659022075_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEYmgeWqSyFrHE-dMdhjqV-JSr9EynWJcYlKv0TKdYlxgfctWcIPT8iTcF5u1XBRf7J1MfXB_GdSDzodQklRiuU&_nc_ohc=-O1OldpnisoAX9KjZg1&_nc_ht=scontent.fbkk5-7.fna&oh=03_AdTLGyS0gE7jyr2GG04_B-XWJOZB1FwDCzGmCmW0XnL55A&oe=65C71254"
              />
            }
          >
            <Meta title="Lorem ipsum" description="One-stop Platform community for
            Agents and Operator in Thailand." />
            <Button
              style={{
                borderColor: "#2a4b6a",
                backgroundColor: "#2a4b6a",
                color: "white",
                display: "flex",
                marginTop: "80px",
                marginLeft: "104px",
                fontSize: "20px",
                width: "180px",
                height: "70px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              shape="round"
              size={"large"}
            >
              Buy package
            </Button>
          </Card>
        </Col>
        <Col span={5}>
          <Card
            hoverable
            style={{
              width: 440,
            }}
            cover={
              <img
                alt="example"
                src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.15752-9/413428920_1589035181899988_4405096690990716786_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGcjimZXzvdberPiExqU5kEAamamPxWt70BqZqY_Fa3vb09WyVueN3uqmCz8Tgmre6_g-PazgrFAjSkIewXjpxm&_nc_ohc=yKYJkXn-aUoAX_LhAgO&_nc_ht=scontent.fbkk5-1.fna&oh=03_AdQTbcKjtnav3J1lBVvCPHBO9stCFXry3k7v2UVnJdXQZQ&oe=65C70276"
              />
            }
          >
            <Meta title="Lorem ipsum" description="One-stop Platform community for
            Agents and Operator in Thailand." />
            <Button
              style={{
                borderColor: "#2a4b6a",
                backgroundColor: "#2a4b6a",
                color: "white",
                display: "flex",
                marginTop: "80px",
                marginLeft: "104px",
                fontSize: "20px",
                width: "180px",
                height: "70px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              shape="round"
              size={"large"}
            >
              Buy package
            </Button>
          </Card>
        </Col>
        <Col span={5}>
          <Card
            hoverable
            style={{
              width: 440,
            }}
            cover={
              <img
                alt="example"
                src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.15752-9/413926482_2016061548766650_1389705529659022075_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEYmgeWqSyFrHE-dMdhjqV-JSr9EynWJcYlKv0TKdYlxgfctWcIPT8iTcF5u1XBRf7J1MfXB_GdSDzodQklRiuU&_nc_ohc=-O1OldpnisoAX9KjZg1&_nc_ht=scontent.fbkk5-7.fna&oh=03_AdTLGyS0gE7jyr2GG04_B-XWJOZB1FwDCzGmCmW0XnL55A&oe=65C71254"
              />
            }
          >
            <Meta title="Lorem ipsum" description="One-stop Platform community for
            Agents and Operator in Thailand." />
            <Button
              style={{
                borderColor: "#2a4b6a",
                backgroundColor: "#2a4b6a",
                color: "white",
                display: "flex",
                marginTop: "80px",
                marginLeft: "104px",
                fontSize: "20px",
                width: "180px",
                height: "70px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              shape="round"
              size={"large"}
            >
              Buy package
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
  export default Home;
 