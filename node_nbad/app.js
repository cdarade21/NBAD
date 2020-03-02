const express=require('express')

var app=express()

app.set('view engine','ejs')
app.use('/assets',express.static('assets'))

app.get('/',(req,res)=>{
    res.send('This is a homepage')
})
app.get('/contact',(req,res)=>{
    res.sendfile(__dirname+'/contact.html')
})
app.get('/profile/:name',(req,res)=>{
    var data={age:21,job:'Ninja',hobbies:['eating','drinking','fishing','fighting']}
    res.render('profile', {person:req.params.name,data:data})

})

app.listen(3000)
console.log('Server has started on port 3000')



