import Card from "./components/Card";
import GlobalStyle from "./components/styles/Global.styles";
import React from "react";
import { themes } from './components/Theme'
import { ThemeProvider } from "styled-components";
import {themeContext} from './components/context/ThemeContext'

function App() {

  const [theme, setTheme] = React.useState('dark');

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <themeContext.Provider value={{ changeTheme }} >
          <Card />
        </themeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
