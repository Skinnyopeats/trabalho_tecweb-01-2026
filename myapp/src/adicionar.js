import './style.css'

const form = document.getElementById('form-adicionar')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const titulo = form.titulo.value.trim()
  const data = form.data.value
  const categoria = form.categoria.value
  const descricao = form.descricao.value.trim()

  if (!titulo || !data || !categoria) {
    mensagem.className = 'mensagem erro'
    mensagem.textContent = 'Preencha todos os campos obrigatórios.'
    return
  }

  const itens = JSON.parse(localStorage.getItem('agenda') ?? '[]')

  itens.push({
    id: crypto.randomUUID(),
    titulo,
    data,
    categoria,
    descricao,
  })

  localStorage.setItem('agenda', JSON.stringify(itens))

  mensagem.className = 'mensagem sucesso'
  mensagem.textContent = 'Item salvo com sucesso!'
  form.reset()
})
