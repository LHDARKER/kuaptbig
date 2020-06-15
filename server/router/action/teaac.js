const teaModel = require('../../model/tea')



function alltea(req) {
    return teaModel.findAll({raw:true})
}


module.exports = {
    alltea
}