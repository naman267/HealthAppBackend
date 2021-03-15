const Disease=require('../models/disease')

function controller()
{
    return {
        diseaseList(req,res){

            Disease.find({}).then(disease=>{
                console.log(disease)
                res.json(disease)
            })
        }
    }
}
module.exports=controller
