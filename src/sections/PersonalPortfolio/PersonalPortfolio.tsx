import { Flex, Row, Typography } from "antd";
import { t } from "i18next";
import "./PersonalPortfolio.css";
import CodeIcon from "../../assets/icons/CodeIcon";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PersonalPortfolio = () => {
  const portfolio = t("portfolio", { returnObjects: true }) as Array<any>;

  return (
  <Flex vertical justify="flex-start" align="center" className="section">
    <Typography.Title level={2} style={{ margin: 0, alignSelf: "start" }}>
      {t("personalPortfolioTitle")}
    </Typography.Title>
    <p style={{alignSelf: "self-start"}}>{t("personalPortfolioDescription")}</p>
    <CodeIcon />
    <Row gutter={16} justify={"center"}>
      {portfolio.map(p => (
        <PortfolioItem thumbnail={p.thumbnail} title={p.title} description={p.description} tags={p.tags} links={p.links} />
      ))}
    </Row>
  </Flex>
)};

export default PersonalPortfolio;
