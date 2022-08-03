import './index.css'

const node  = document.createElement('span')
node.textContent = 'Hello World'
node.classList.add('main')
console.log('document.body', document.body)
document.body.appendChild(node)