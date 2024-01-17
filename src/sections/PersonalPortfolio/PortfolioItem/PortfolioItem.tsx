import { Card, Col, Space, Tag } from "antd";
import { JSX } from "react/jsx-runtime";
import { CheckRepoAction, GoToSiteAction } from "../../../components/CardActions/CardActions";

const { Meta } = Card;

export type PortfolioItemProps = {
  thumbnail: string;
  title: string[];
  description: string[];
  tags: string[];
  links: any;
};

const PortfolioItem = ({
  thumbnail,
  title,
  description,
  tags,
  links,
}: PortfolioItemProps) => {
  const getActions = () => {
    let actions: JSX.Element[] = [];
    links.forEach((l: any) => {
      if (l.siteUrl && l.siteUrl !== "") actions.push(<GoToSiteAction url={l.siteUrl} />);
      if (l.repo && l.repo !== "") actions.push(<CheckRepoAction url={l.repo} />);
    });
    return actions;
  };

  return (
    <Col xs={22} sm={22} md={11} lg={11} xl={11}>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={thumbnail} />}
        actions={getActions()}
      >
        <Meta title={title} description={description} />
        <Space wrap style={{ marginTop: 16 }}>
          {tags.map((t) => (
            <Tag style={{ fontSize: 12 }}>{t}</Tag>
          ))}
        </Space>
      </Card>
    </Col>
  );
};

export default PortfolioItem;
