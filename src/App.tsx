import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./views/layouts/header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <div className="main-content">
          <Routes>
            {AppRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
