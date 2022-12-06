let mongoose = require('mongoose')
let userschema = mongoose.Schema({



    email:{ type:String, required:true},
    gender:{ type:String, enum:['Male','Female'], default:'Female'},
    
    language:{ type:String, enum:['C','Python', 'Scala', 'Go lang'], default:'Python'},
    level:{ type:String, enum:['Fresher(0-1)','Intermediate(1-3)','senior(5+)'], default:'Fresher(0-1)'},

},
{
    timestamps:true
}
)


let User = mongoose.model('User', userschema)

module.exports = User