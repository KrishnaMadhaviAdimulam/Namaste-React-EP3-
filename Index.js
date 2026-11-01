const heading1 = React.createElement('h1', {className: 'heading1'}, "I am h1 tag")
const heading2 = React.createElement('h2', {className: 'heading2'}, "I am h2 tag")
const child = React.createElement('div', {id: 'child'}, [heading1, heading2])
const parent = React.createElement('div', {id: 'parent'}, child)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);



