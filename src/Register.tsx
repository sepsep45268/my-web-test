import React, { useState } from "react";
import {
  Upload,
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Divider,
  Select,
  Card,
  Button,
  Image,
} from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MailOutlined, PictureOutlined, PlusOutlined } from "@ant-design/icons";
import "./Register.css"; // นำเข้าไฟล์ CSS
import TextArea from "antd/es/input/TextArea";
import type { RcFile, UploadProps } from "antd/es/upload";
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const Register: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [myImg, setMyImg] = useState();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PictureOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const [form] = Form.useForm();
  const handleOnFinish = (value: any) => {
    
    console.log("value :>> ", value);

  };

  return (
    <div
      style={{
        marginTop: "65px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card>
   
        <Form form={form} onFinish={handleOnFinish} layout="vertical">
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <div style={{ marginLeft: 260, marginBottom: 15 }}>
                <Form.Item name="IMG">
                  <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-circle"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                </Form.Item>

                <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </div>
            </Col>
          </Row>

          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Form.Item label="Email" name="mail">
                <Input
                  type="Email"
                  prefix={<MailOutlined />}
                  placeholder={` Enter your Email`}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Password" name="Password">
                <Input
                placeholder={` Enter your password`}
                 />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Confirmed Password" name="CfPassword">
                <Input
                placeholder={` Enter your confirmed password`}
                 />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <h2 style={{ color: "#255fa8" }}>Information</h2>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Form.Item label={"Company Name"} name="Company">
                <Input 
                placeholder={` Enter Company Name`}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={"Tax ID"} name="Tax">
                <Input 
                placeholder={` Enter Tax ID`}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={"Full Name"} name="fullName">
                <Input 
                placeholder={` Enter your Full Name`}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Form.Item label={"Country"} name="Country">
                <Input 
                placeholder={` Enter your Country`}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <label>Phone Number</label>
              <Row gutter={[4, 4]}>
                <Col span={9} style={{ marginTop: 7 }}>
                  <Form.Item name="Num1">
                    <Select defaultValue={"+66"}></Select>
                  </Form.Item>
                </Col>
                <Col span={15} style={{ marginTop: 7 }}>
                  <Form.Item name="Num2">
                    <Input 
                    placeholder={` Enter your Phone Number`}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Form.Item label={"Website"} name="Website">
                <Input 
                placeholder={` Enter Website`}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Form.Item label={"Address"} name="Address">
                <TextArea rows={5} placeholder="Enter your Address" maxLength={6} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={"State/Province"} name="State">
                <Input 
                placeholder={` Enter your State/Province"`}
                />
              </Form.Item>
              <Form.Item label={"sub-Disreict"} name="sub">
                <Input 
                placeholder={` Enter your sub-Disreict`}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={"city/Disreict"} name="city">
                <Input 
                placeholder={` Enter your city/Disreict`}
                />
              </Form.Item>
              <Form.Item label={"zip Code"} name="zip">
                <Input 
                placeholder={` Enter your zip Code`}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={[460, 50]}>
          <Col span={12}>
            <Button
              style={{
                borderColor: "#2a4b6a",
                backgroundColor: "#2a4b6a",
                color: "white",
                fontSize: "15px",
                height: "45px",
                width: "120px",
              }}
              shape="round"
              size={"large"}
            >
              Cancle
            </Button>
          </Col>
          <Col span={12}>
            <Button
              onClick={form.submit}
              style={{
                borderColor: "#5fc198",
                backgroundColor: "#5fc198",
                color: "white",
                fontSize: "15px",
                height: "45px",
                width: "120px",
              }}
              shape="round"
              size={"large"}
            >
              submit
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Register;