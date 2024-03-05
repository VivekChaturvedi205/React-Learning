// function customrender(reactelement, mainrenderer) {
//     const domelement = document.createElement(reactelement.type);
//     domelement.innerHTML =reactelement.children
//     domelement.setAttribute('href',reactelement.props.href)
//     domelement.setAttribute('target',reactelement.props.tagret)
//     mainrenderer.appendChild(domelement);
// }

function customrender(reactelement, mainrenderer) {
    const domelement = document.createElement(reactelement.type);
    domelement.innerHTML =reactelement.children
    for (const prop in reactelement.props) {
        if (prop === 'children')continue
        domelement.setAttribute(prop,reactelement.props[prop])     
    }
    mainrenderer.appendChild(domelement);
}

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainrenderer = document.getElementById('root');
customrender(reactelement, mainrenderer);