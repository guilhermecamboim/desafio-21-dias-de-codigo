import { useState } from "react";
import Switch from "react-switch";
import { Container } from "./styles";
import { usePersistedState } from '../utils/usePersistedState';
import light from '../../styles/light';
import dark from '../../styles/dark';
import { ThemeProvider } from "styled-components";

export function DayEight(){
  const [checked, setChecked] = useState(false)
  const [theme, setTheme] = usePersistedState('theme', light);

  function ToggleTheme() {
  if (checked === false) {
    setChecked(true)
    setTheme(theme.title === 'light' ? dark : light)
  } else {
    setChecked(false)
    setTheme(theme.title === 'light' ? dark : light)
  }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Toggle Theme</h1>
        {theme.title === 'light' ? '☀️' : '🌙'}
        <Switch
          checked={checked}
          onChange={ToggleTheme}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </Container>
    </ThemeProvider>
  )
}