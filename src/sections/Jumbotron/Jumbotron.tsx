import { CodeOutlined } from "@ant-design/icons";
import { Col, Row, Space, Typography, theme } from "antd";
import { forwardRef } from "react";
import './Jumbotron.css'
const { useToken } = theme;

const Jumbotron = forwardRef<HTMLHeadingElement>((props, ref) => {
  const { token } = useToken();
  return (
  <Space direction="vertical">
    <Row justify={"center"} align={"middle"}>
      <Col xs={22} sm={20} md={20} lg={4} xl={4} style={{ textAlign: "center" }}>
        <CodeOutlined style={{ fontSize: 130 }} />
      </Col>
      <Col xs={22} sm={20} md={20} lg={16} xl={16}>
        <Row>
          <Col span={24}>
            <Typography.Title level={1} style={{ margin: 0 }} ref={ref} className="jumbotron-text">
              CATALINA NAVARRETE
            </Typography.Title>
          </Col>
          <Col>
            <div
            >
              <div
                style={{
                  backgroundColor: token.colorPrimary,
                }}
              >
                <Typography.Title level={1} style={{ margin: 0 }} className="jumbotron-text">
                  FULL STACK DEVELOPER.
                </Typography.Title>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Space>
)});

export default Jumbotron;
