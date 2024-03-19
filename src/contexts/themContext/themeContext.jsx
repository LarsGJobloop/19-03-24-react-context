import { useState, createContext, useContext } from "react"

// First create the context
const themeContext = createContext()

// Define what state or other variables to be part of the context
export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark")

    function switchTheme() {
        setTheme((prev) => {
            if (prev === "dark") {
                return "bright"
            } else {
                return "dark"
            }
        })
    }

    const context = {
        theme,
        switchTheme
    }

    return (
        <themeContext.Provider value={context}>
            {props.children}
        </themeContext.Provider>
    )
}

// Setup a custom hook for consuming the context
export function useThemeContext() {
    const context = useContext(themeContext)

    if (!context) {
        throw "useThemeContext needs to be a child of a ThemeContextProvider"
    }

    return context
}