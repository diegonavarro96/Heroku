// How to init server:
//
// npm init -y
// npm install express
// 


const express = require('express')

const app = express()


//Path to public folder
//const path = require('path')
//const publicDir= path.join(__dirname,'public')

//app.use(express.static(publicDir))
//



app.get('/',function(req, res){
    res.send('Hola mundo!')
})


app.get('/about',function(req,res){
    res.send('un about muy interesenante')
})

app.get('/misc',function(req,res){
    res.send({
        dia : 'jueves',
        description: 'casi Viernes'
    })
})

// Prender el servidor:
// 

app.listen(3000,function(){
    console.log('up and running!')
})



// no section found
app.get('*',function(req,res){
    res.send('La cagaste')
})