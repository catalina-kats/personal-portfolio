import { Button, Col, Flex, List, Row, Typography } from "antd";
import ResponsibilityItem from "./Responsibility/ResponsibilityItem";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { CSSProperties, ReactNode, useState } from "react";
import {
  CalendarOutlined,
  ColumnHeightOutlined,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import "./Experience.css";
import { t } from "i18next";

const { useToken } = theme;

const Experience = () => {
  const experience = t("experience", { returnObjects: true }) as Array<any>;
  let allKeys = experience.map((e: any, i: number) => {
    return (i + 1).toString();
  });

  const [openPanels, setOpenPanels] = useState(allKeys);
  const { token } = useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const onClickPanelHeader = (key: string | string[]) => {
    if (typeof key === "string") {
      setOpenPanels((openP: any) => [...openP, key]);
    } else {
      setOpenPanels(key);
    }
  };

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => {
    return experience.map((e, i) => {
      const resp = e.responsibilities.map((r: any) => (
        <ResponsibilityItem text={r.text} highlight={r.highlight} />
      ));
      return {
        key: i + 1,
        label: (
          <Row justify={"space-between"} align={"middle"}>
            <Col xs={24} sm={24} md={11} lg={11} xl={11}>
              <Row justify={"start"}>
                <Col>
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    {e.role}
                  </Typography.Title>
                  <div>{e.company}</div>
                </Col>
                <Col></Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={8} align={"middle"}>
                <Col>
                  <CalendarOutlined />
                </Col>
                <Col style={{ fontSize: 16, alignSelf: "self-end" }}>
                  {e.beginDate} - {e.endDate}
                </Col>
              </Row>
            </Col>
          </Row>
        ),
        children: (
          <List
            size="small"
            bordered={false}
            dataSource={resp}
            renderItem={(item: ReactNode) => <List.Item>{item}</List.Item>}
          />
        ),
        style: panelStyle,
      };
    });
  };

  return (
    <Flex vertical className="section">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Typography.Title level={2} style={{ margin: 0 }}>
            {t("workExperienceSectionTitle")}
          </Typography.Title>
        </Col>
        <Col>
          <Row gutter={8} align={"middle"}>
            <Col>
              <Button
                className="collapse-expand-big-button"
                size="large"
                icon={<VerticalAlignMiddleOutlined />}
                onClick={() => setOpenPanels([])}
              >
                {t("collapseButtonLabel")}
              </Button>
              
              <Button
                className="collapse-expand-small-button"
                style={{verticalAlign: "middle"}}
                size="large"
                icon={<VerticalAlignMiddleOutlined />}
                onClick={() => setOpenPanels([])}
              />
            </Col>
            <Col>
              <Button
                className="collapse-expand-big-button"
                size="large"
                icon={<ColumnHeightOutlined />}
                onClick={() => setOpenPanels(allKeys)}
              >
                {t("expandButtonLabel")}
              </Button>
              <Button
                className="collapse-expand-small-button"
                size="large"
                style={{verticalAlign: "middle"}}
                icon={<ColumnHeightOutlined />}
                onClick={() => setOpenPanels(allKeys)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Collapse
        bordered={false}
        defaultActiveKey={openPanels}
        activeKey={openPanels}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
        onChange={onClickPanelHeader}
      />
    </Flex>
  );
};

export default Experience;
