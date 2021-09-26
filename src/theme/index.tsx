import React, { useMemo } from "react"
import { Colors } from './styled'
import { 
    DefaultTheme,
    ThemeProvider as StyledComponentsThemeProvider
} from 'styled-components/macro'

function colors(): Colors {
    return {
        bg1: 'red',

        text1: '#000'
    }
}

function theme(): DefaultTheme {
    return {
        ...colors()
    }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const themeObject = useMemo(() => theme(), [])
  
    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
  }
