const config = require('./config/config')
const app = config()
app.listen(3000, () => console.log('Servidor OK!!'))