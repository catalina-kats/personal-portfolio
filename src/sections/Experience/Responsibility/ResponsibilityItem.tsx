import { theme } from "antd";
import { createElement } from "react";
import './ResponsibilityItem.css'

const { useToken } = theme;

export type ResponsibilityItemProps = {
  text: string[];
  highlight: string[];
};

const ResponsibilityItem = ({ text, highlight }: ResponsibilityItemProps) => {
  const { token } = useToken();
  const owo = text.map((txt: string, i: number) => {
    const marginRightValue = txt !== "." && txt !== "," ? "2px" : "0px";
    const marginLeftValue = txt !== "." && txt !== "," ? "2px" : "0px";
    return (
      <p
        style={{
          display: "inline",
          marginRight: marginRightValue,
          marginLeft: marginLeftValue,
          fontSize: "12pt",
          color: token.colorText,
        }}
      >
        {txt} <b>{highlight[i]}</b>
      </p>
    );
  });
  return createElement("span", { className: "responsibility-item" }, ...owo);
};

export default ResponsibilityItem;
