const Disease = require('../models/disease')

function controller() {
  return {
    diseaseList(req, res) {
      const dis = new Disease({
        title: 'sar dard',
        category: 'internal'
      })
      dis.save()

      Disease.find({}).then((disease) => {
        console.log(disease)
        res.json(disease)
      })
    }
  }
}

module.exports = controller
