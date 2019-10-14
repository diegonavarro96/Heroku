// How to init server:
//
// npm init -y
// npm install express
// 


const express = require('express')
const omdb =require('./movies.js')
const Port = process.env.PORT || 3000
const app = express()


//Path to public folder
//const path = require('path')
//const publicDir= path.join(__dirname,'public')

//app.use(express.static(publicDir))
//






//app.get('/about',function(req,res){
  //  res.send('un about muy interesenante')
//})

//app.get('/misc',function(req,res){
  //  res.send({
    //    dia : 'jueves',
     //   description: 'casi Viernes'
    //})
//})

// Prender el servidor:
// 




app.get('/omdb', function (req, res) {
    if (!req.query.search) {
        res.send({
            error: "Debes de enviar un titulo de una pelicula o serie"
        })
    }

    omdb.omdbMovie(req.query.search, function (error, response) {
        if (error) {
            return response.send({
                error: error
            })
        }
        
        if (response.season) {
            var title = response.title
            omdb.omdbSeason(response.title, response.season, function (error, response) {
                if (error) {
                    return response.send({
                        error: error
                    })
                }
                response.send({
                    title: title,
                    season: response.season,
                    episodes: response.episodes
                })
                
            })

        } 
        res.send(response)
    })
})



app.get('/',function(req, res){
    res.send({
        greeting: 'Hola mundo!'
    })
})



// no section found
app.get('*',function(req,res){
    res.send({
        error: 'Ruta no valida!'})
})

app.listen(Port,function(){
    console.log('up and running!')
})
