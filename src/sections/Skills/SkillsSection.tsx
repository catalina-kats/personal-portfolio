import { Flex, Space, Tag, Typography } from "antd";
import { t } from "i18next";

const SkillsSection = () => {
    const skills = t('skills', { returnObjects: true }) as Array<any>;
    const competencies = t('competencies', { returnObjects: true }) as Array<any>;
    const softSkills = t('softSkills', { returnObjects: true }) as Array<any>;
  return (
    <Flex vertical justify="flex-start" align="center" className="section">
      <Typography.Title level={2} style={{ alignSelf: "start", marginBottom: 0 }}>
        {t("skillsSectionTitle")}
      </Typography.Title>

      <Typography.Title level={4} style={{ alignSelf: "start" }}>
        {t("mainSkillsSectionTitle")}
      </Typography.Title>
      <Space size={[0, 4]} wrap style={{alignSelf: "start"}}>
        {skills.map((s) => (
          <Tag>{s}</Tag>
        ))}
      </Space>

      <Typography.Title level={4} style={{ alignSelf: "start" }}>
        {t("competenciesSectionTitle")}
      </Typography.Title>
      <Space size={[0, 4]} wrap style={{alignSelf: "start"}}>
        {competencies.map((s) => (
          <Tag>{s}</Tag>
        ))}
      </Space>

      <Typography.Title level={4} style={{ alignSelf: "start" }}>
        {t("softSkillsSectionTitle")}
      </Typography.Title>
      <Space size={[0, 4]} wrap style={{alignSelf: "start"}}>
        {softSkills.map((s) => (
          <Tag>{s}</Tag>
        ))}
      </Space>
    </Flex>
  );
};

export default SkillsSection;
