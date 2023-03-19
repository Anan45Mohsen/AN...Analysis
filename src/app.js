const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var hbs = require('hbs')
const path = require('path')
const public = path.join(__dirname , '../public')
app.set('view engine' , 'hbs')
app.use(express.static(public))

const viewDirecotry = path.join(__dirname , '../analysisTemplate/views')
app.set('views' , viewDirecotry)

const partialsPath = path.join(__dirname, "../analysisTemplate/partials")
hbs.registerPartials(partialsPath)


app.get('/' , (req ,res) =>{
    res.render('index',{
        banner1:"img/banner_image_1.svg",
        homeImg:"img/about_frame.png",
        homeImg2:"img/blog/blog-2.jpg",
        homeImg3:"img/blog/blog-3.jpg",
        homeImg4:"img/banner_image_2.svg",
        homeImg5:"img/blog/blog-1.jpg",
    })
})



app.get('/about', (req ,res ) =>{
    res.render('about' , {
        aboutImg:"img/about_frame.png",
    })
})
app.get('/service',(req,res)=>{
    res.render('service' , {
        serviceImg:"img/services/service-3.svg",
        serviceImg2:"img/services/service-2.svg",
        serviceImg3:"img/services/service-1.svg"
    })
})

app.get('/blog' , (req,res) =>{
    res.render('blog',{
        bloImg1:"img/blog/blog-1.jpg",
        blogImg2:"img/person/person_1.jpg",
        blogImg3:"img/blog/blog-1.jpg",
        blogImg4:"img/blog/blog-2.jpg",
        blogImg5:"img/blog/blog-3.jpg"
    })
})
app.get('/contact' ,(req,res)=>{
    res.render('contact')
})

app.listen(port, () =>{
    console.log(`our website working on port : ${port}`) 
   })