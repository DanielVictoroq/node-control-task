import express from 'express'; 
const consign = require('consign');
import 'dotenv/config'
import bodyParser from 'body-parser';

export default () => {
    const app = express()
    const consignUse = consign()
    
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    consignUse
        .include('src/controllers')
        .include('src/routes')
        .include('src/models')
        .into(app)

   return app

}