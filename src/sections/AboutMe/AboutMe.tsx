import { EnvironmentOutlined } from "@ant-design/icons";
import { Flex, Space, Typography } from "antd";
import { t } from "i18next";
import "./AboutMe.css";

const AboutMe = () => (
  <Flex vertical justify="flex-start" align="center" className="section">
    <Typography.Title level={2} style={{ margin: 0, alignSelf: "start" }}>
      {t("aboutMeSectionTitle")}
    </Typography.Title>
    <Space direction="horizontal" style={{ alignSelf: "start" }}>
      <EnvironmentOutlined style={{ fontSize: "60pt" }} size={100} />
      <Typography.Title
        level={2}
        style={{
          margin: 0,
          textTransform: "uppercase",
          alignSelf: "start",
        }}
      >
        SANTIAGO, CHILE
      </Typography.Title>
    </Space>
    <p>{t("presentation")}</p>
  </Flex>
);

export default AboutMe;
