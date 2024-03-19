import { createContext, useContext, useState } from 'react'
import style from './Accordion.module.css'

const accordionContext = createContext()

function Root(props) {
    const [currentlyOpen, setCurrentlyOpen] = useState(0)

    return (
        <accordionContext.Provider value={{ currentlyOpen, setCurrentlyOpen }}>
            <ul>
                {props.children}
            </ul>
        </accordionContext.Provider>
    )
}

function Item(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function Title(props) {
    return (
        <div>{props.children}</div>
    )
}

function Description(props) {
    const { currentlyOpen } = useContext(accordionContext)
    const show = false

    return (
        <div className={`${style.description} ${show ? style.show : ""}`}>{props.children}</div>
    )
}

export default {
    Root,
    Item,
    Title,
    Description
}