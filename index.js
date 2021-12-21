const config = require('./config/config')
const database = require('./config/database')

const app = config()

// database.connect(erro => {
//     if(erro) {
        console.log(process.env.DB_HOST)
//     }else {
//     }
// })

app.listen(3000, () => console.log('Servidor OK!!'))