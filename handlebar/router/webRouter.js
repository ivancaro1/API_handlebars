const express = require('express')
const webRouter = express.Router()
const { productsController } = require('../controllers/controladorApi.js')

const clase = require('../databases/ProdutcsClass.js')

const productos = new clase('./productos_resultado.txt')


webRouter.get('/', (req, res) => {
    res.render('formulario')
})

webRouter.get('/productos', productsController.getAll);
webRouter.post('/productos', productsController.save);

module.exports = { webRouter }