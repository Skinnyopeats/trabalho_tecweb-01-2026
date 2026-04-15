import './style.css'

const itens = JSON.parse(localStorage.getItem('agenda') ?? '[]')
const hoje = new Date().toISOString().slice(0, 10)

const total = itens.length
document.getElementById('contagem-resumo').textContent =
  total === 0
    ? 'Nenhum item cadastrado ainda.'
    : `${total} ${total === 1 ? 'item cadastrado' : 'itens cadastrados'} no total.`

function formatarData(data) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

function renderizarLista(listaEl, itens, vazia) {
  if (itens.length === 0) {
    const li = document.createElement('li')
    li.className = 'vazio'
    li.textContent = vazia
    listaEl.appendChild(li)
    return
  }

  itens.forEach(item => {
    const li = document.createElement('li')
    li.className = 'card-home'
    li.innerHTML = `
      <strong>${item.titulo}</strong>
      <span class="badge">${item.categoria}</span>
      <time>${formatarData(item.data)}</time>
    `
    listaEl.appendChild(li)
  })
}

const proximos = itens
  .filter(item => item.data >= hoje)
  .sort((a, b) => a.data.localeCompare(b.data))
  .slice(0, 3)

const recentes = [...itens]
  .reverse()
  .slice(0, 3)

renderizarLista(document.getElementById('lista-proximos'), proximos, 'Nenhum compromisso futuro.')
renderizarLista(document.getElementById('lista-recentes'), recentes, 'Nenhum item adicionado ainda.')
