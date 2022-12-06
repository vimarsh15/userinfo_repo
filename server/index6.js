let express = require('express')
let app = express()



let bodyparser = require('body-parser');
const userroute = require('./route/userroute');


let mongoose = require('mongoose')

let cors = require('cors')

app.use(cors())
mongoose.connect('mongodb+srv://talkative:fs5rsYYy9mWetE0g@cluster0.fub93zf.mongodb.net/?retryWrites=true&w=majority').then(()=>{
     console.log('db connected')
}).catch((err)=>{
    console.log(err)
})
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/user', userroute)



app.use((err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
      message: err.message,
    
    });
  });
app.get('/',(req,res)=>{
     res.send('hello')  
})

app.listen(3200, console.log('server on'))