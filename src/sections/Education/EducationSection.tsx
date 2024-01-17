import { Flex, Space, Typography } from "antd";
import { t } from "i18next";

const { Text } = Typography;

const EducationSection = () => {
  const education = t("education", { returnObjects: true }) as Array<any>;
  const languages = t('languages', { returnObjects: true }) as Array<any>;

  return (
    <Flex
      vertical
      justify="flex-start"
      align="center"
      className="section"
    >
      <Typography.Title level={3} style={{ alignSelf: "start"}}>
        {t("educationSectionTitle")}
      </Typography.Title>
      
      <Space direction="vertical" style={{alignSelf: "start"}}>
        {education.map((e) => (
          <Flex vertical style={{marginBottom: 10}}>
            <Text strong>{e.title}</Text>
            <Text italic>{e.school}</Text>
            <Text>{e.date}</Text>
          </Flex>
        ))}
      </Space>
      <Typography.Title level={4} style={{ alignSelf: "start" }}>
        {t("languagesSectionTitle")}
      </Typography.Title>
      
      <Space direction="vertical" style={{alignSelf: "start"}}>
        {languages.map((e) => (
          <Flex vertical style={{marginBottom: 10}}>
            <Text strong>{e.name}</Text>
            <Text>{e.level}</Text>
          </Flex>
        ))}
      </Space>
    </Flex>
  );
};

export default EducationSection;
