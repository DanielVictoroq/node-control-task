const express = require('express') 
const consign = require('consign')
const env = require('dotenv/config');

module.exports = () => {
    const app = express()

    consign()
        .include('controllers')
        .include('routes')
        .include('models')
        .into(app)

   return app

}