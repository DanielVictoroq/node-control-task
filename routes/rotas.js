module.exports = app => { 
    app.get('/', (req, res) => res.send('Servidor rodando, tudo osk'))
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))
}