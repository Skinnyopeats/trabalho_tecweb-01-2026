import './style.css'

const lista = document.getElementById('lista-itens')

function formatarData(data) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

function renderizar() {
  const itens = JSON.parse(localStorage.getItem('agenda') ?? '[]')
  lista.innerHTML = ''

  if (itens.length === 0) {
    const li = document.createElement('li')
    li.className = 'vazio'
    li.textContent = 'Nenhum item cadastrado ainda.'
    lista.appendChild(li)
    return
  }

  itens
    .slice()
    .sort((a, b) => a.data.localeCompare(b.data))
    .forEach(item => {
      const li = document.createElement('li')
      li.className = 'card-consulta'
      li.innerHTML = `
        <article>
          <header>
            <strong>${item.titulo}</strong>
            <span class="badge">${item.categoria}</span>
          </header>
          <time>${formatarData(item.data)}</time>
          ${item.descricao ? `<p>${item.descricao}</p>` : ''}
          <button type="button" data-id="${item.id}">Excluir</button>
        </article>
      `
      lista.appendChild(li)
    })
}

lista.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-id]')
  if (!btn) return

  const itens = JSON.parse(localStorage.getItem('agenda') ?? '[]')
  const atualizados = itens.filter(item => item.id !== btn.dataset.id)
  localStorage.setItem('agenda', JSON.stringify(atualizados))
  renderizar()
})

renderizar()
