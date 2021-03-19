const Disease = require('../models/disease')

function controller() {
  return {
    diseaseListInternal(req, res) {
      

      Disease.find({category:'Internal'}).then((disease) => {
        console.log(disease)
        res.json(disease)
      })
    },
    diseaseListExternal(req, res) {
      

      Disease.find({category:'External'}).then((disease) => {
        console.log(disease)
        res.json(disease)
      })
    }

  }
}

module.exports = controller
