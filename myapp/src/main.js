import './style.css'

const itens = JSON.parse(localStorage.getItem('agenda') ?? '[]')
document.getElementById('contagem').textContent = itens.length
