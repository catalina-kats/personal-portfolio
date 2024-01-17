import { FloatButton } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import DarkModeIcon from "../assets/icons/DarkModeIcon";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Jumbotron from "./Jumbotron/Jumbotron";
import Contact from "./Contact/Contact";
import PersonalPortfolio from "./PersonalPortfolio/PersonalPortfolio";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import SkillsSection from "./Skills/SkillsSection";
import EducationSection from "./Education/EducationSection";

export type HomeProps = {
  darkMode: boolean;
  toggleDarkMode: any;
};

const Home = ({ darkMode, toggleDarkMode }: HomeProps) => {
  const { t, i18n } = useTranslation();
  const [oppositeMode, setOppositeMode] = useState(
    darkMode ? t("lightMode") : t("darkMode")
  );
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
      i18n.changeLanguage("en");
    } else {
      setLanguage("es");
      i18n.changeLanguage("es");
    }
  };
  useEffect(() => {
    setOppositeMode(darkMode ? t("lightMode") : t("darkMode"));
  }, [darkMode, language]);

  const ref = useRef<HTMLHeadingElement>(null);
  const alignCenter = { display: "flex", alignItems: "center" };

  const scrollToTop = () => {
    ref.current?.scrollIntoView();
  };

  return (
    <>
      <Parallax
        pages={7}
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={10}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <Jumbotron ref={ref} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1.4}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <SkillsSection />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1.4}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <EducationSection />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <PersonalPortfolio />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>

      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton
          tooltip={t("languageToggleTooltip")}
          icon={<GlobalOutlined />}
          badge={{ count: language.toUpperCase(), color: "#c880ed" }}
          onClick={() => toggleLanguage()}
        />
        <FloatButton
          tooltip={`${t("switchModeTooltip")} ${oppositeMode}`}
          onClick={() => toggleDarkMode()}
          icon={
            <DarkModeIcon
              fill={darkMode ? "white" : "black"}
              fontSize={28}
              width={"0.9em"}
              height={"0.9em"}
            />
          }
        />
        <FloatButton.BackTop
          tooltip={t("scrollToTopTooltip")}
          onClick={scrollToTop}
          visibilityHeight={0}
        />
      </FloatButton.Group>
    </>
  );
};

export default Home;
