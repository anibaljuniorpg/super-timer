//import { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter} from "react-router-dom";
import { Router } from "./Router";
import { CyclesContextProvider} from "./contexts/CyclesContext";

//* O App é o componente principal da aplicação, responsável por envolver toda a estrutura da aplicação com o ThemeProvider,
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}