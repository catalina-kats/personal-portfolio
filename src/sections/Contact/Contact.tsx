import { Col, Flex, Row, Space, Typography } from "antd";
import { t } from "i18next";
import { Icon } from "@ant-design/compatible";

const Contact = () => {
  const links = [
    {
      name: t("linkedInText"),
      url: "https://www.linkedin.com/in/catalina-andrea-navarrete-arellano-2242b3140",
      icon: "linkedin",
    },
    {
      name: t("repoText"),
      url: "https://github.com/catalina-kats",
      icon: "github",
    },
    {
      name: t("emailText"),
      url: "mailto:cata.navarrete.95@gmail.com",
      icon: "mail",
    },
  ];

  return (
    <Space direction="vertical">
      <Typography.Title level={2} style={{ margin: 0, textAlign: "center" }}>
        {t("contactSectionTitle")}
      </Typography.Title>

      <Flex vertical>
        {links.map((l) => (
          <a href={l.url} target="_blank" rel="noreferrer">
            <Row
              justify={"center"}
              align={"middle"}
              style={{ marginBottom: 10 }}
              gutter={64}
            >
              <Col span={3}>
                <Icon type={l.icon} style={{ fontSize: "30pt" }} />
              </Col>
              <Col>{l.name}</Col>
            </Row>
          </a>
        ))}
      </Flex>
    </Space>
  );
};

export default Contact;
