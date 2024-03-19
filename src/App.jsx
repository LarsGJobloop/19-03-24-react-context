import './App.css'
import { ThemeContextProvider, useThemeContext } from './contexts/themContext/themeContext'

function App() {
  return (
    <ThemeContextProvider>
      <HeroSection />
      <div>
        <List entries={[
          { id: 0, content: "Lars" },
          { id: 1, content: "Tord" },
          { id: 2, content: "Tron-Morten" },
        ]} />
      </div>
    </ThemeContextProvider>
  )
}

function HeroSection() {
  return (
    <div>
      <Controls />
    </div>
  )
}

function Controls() {
  const { switchTheme } = useThemeContext()
  return (
    <button onClick={switchTheme}>Theme Switcher</button>
  )
}

function List(props) {
  const { theme, switchTheme } = useThemeContext()

  return (
    <div>
      <button onClick={switchTheme}>Another switch theme button</button>
      <ul>
        {props.entries.map(item => {
          return (
            <li
              key={item.id}
              style={{ background: theme === "bright" ? "teal" : "black" }}
            >
              {item.content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
