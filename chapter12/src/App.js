import React from 'react'; 
import Accordion from './components/Accordion'

const items = [
    {
        title: "What is react",
        desc: "1"
    },
    {
        title: "Why use react",
        desc: "2"
    },
    {
        title: "How to use react",
        desc: "3"
    }
]

export default () => {
    return (
    <div>
        <Accordion items={items}/>
    </div>
    )
}