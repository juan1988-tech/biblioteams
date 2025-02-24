"use client"

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null);

export default function ThemeProvider({children}){
    const [theme,setTheme] = useState('light')

    useEffect(()=>{
        document.body.setAttribute("data-theme", theme)
    },[theme])

    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
}