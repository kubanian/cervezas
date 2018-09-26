
const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
// console.log(cervezas[0].nombre)

module.exports = {
  todas: cervezas,
  alazar: uniqueRandomArray(cervezas)
}
