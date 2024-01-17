import { Tooltip } from "antd";
import CodeIcon from "../../assets/icons/CodeIcon";
import { t } from "i18next";
import { ExportOutlined } from "@ant-design/icons";

export type CardActionProps = {
  url: string;
};

export const CheckRepoAction = ({ url }: CardActionProps) => (
    <Tooltip title={t("portfolioRepoLinkText")}>
        <a href={url} target="_blank" rel="noreferrer">
            <CodeIcon width={"1.2em"} height={"1.2em"} />
        </a>
    </Tooltip>
);

export const GoToSiteAction = ({ url }: CardActionProps) => (
    <Tooltip title={t("portfolioSiteUrlLinkText")}>
        <a href={url} target="_blank" rel="noreferrer">
            <ExportOutlined />
        </a>
    </Tooltip>
);