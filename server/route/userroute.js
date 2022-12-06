let express = require('express')
let userroute = express.Router()



let User = require('../schema/userschema')
let asynchandler = require('express-async-handler')
// userroute.get('/',(req,res)=>{
//      res.send('hello')
// })
userroute.post('/addinfo', asynchandler(async(req,res)=>{
     let {email, gender, language, level} = req.body
     
     var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
     if(!email){
          res.status(400)
          
          
          throw new Error('please enter the required fields')
          //  res.send('please enter the required fields')
     }
     else if(email && !regexEmail.test(email)){
        
        res.status(400)
        throw new Error('invalid email')
     }
     else {

          let reguser = await User.findOne({email}) 
          if(reguser){
              res.status(401)
              
              throw new Error('user has already submitted responce')
          
          }
          else {
               let user = new User({
                    email,
                    gender,
                    language,
                    level
               })
               let saveduser = await user.save()
               if(saveduser){
                
                    res.json({
                         message:'user has been submitted response'
                    })
               }
               else {
                    res.status(500)
                    throw new Error('responce could not be saved')
               
               }
          }
     }
}))
module.exports = userroute