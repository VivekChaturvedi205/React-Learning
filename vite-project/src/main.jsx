import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chaubey from './chaubey.jsx'

let username="sumit"
function MyApp(){
    return (
        <h1>Hello Sir !</h1>
    )
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const anotherreactelement=(
    <a href="https://google.com" target="_blank">click me to</a>
    )


const thirdreactelement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target: '_blank',
    },
    'Click hello me to visit google'
    ,username
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <>
    // <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quibusdam voluptatibus nesciunt quisquam veniam, alias magni necessitatibus ratione nihil officia, eaque voluptas? Soluta, repellat quasi reiciendis sit voluptatum eveniet unde!</p>
    // <App />
    // <Chaubey/>
    // </>

    // MyApp()
    // <reactelement/>
    // anotherreactelement
    thirdreactelement



)
