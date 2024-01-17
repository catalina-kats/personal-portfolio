import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import { ConfigProvider, theme } from "antd";
import '../src/i18n/i18n';
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: "'Nunito', sans-serif",
          fontSize: 18,
          colorPrimary: "#c880ed",
          borderRadius: 2,
          colorLink: "#c880ed",
        },
        components: {
          Badge: {
            algorithm: true,
            fontSize: 14,
            colorBgBase: darkMode ? "black" : "white"
          },
          Button: {
            algorithm: true,
            fontSize: 18
          },
          Card: {
            algorithm: true,
          },
          FloatButton: {
            algorithm: true,
          },
          Tag: {
            algorithm: true,
            fontFamily: "RobotoMono"
          },
          Tooltip: {
            algorithm: true,
            fontSize: 16,
          },
        },
      }}
    >
      <MemoryRouter>
        <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" />
        </Routes>
      </MemoryRouter>
    </ConfigProvider>
  );
}

export default App;
