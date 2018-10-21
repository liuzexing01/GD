/**
 * Created by acer on 2018/8/22.
 */
const express=require('express');
const bodyParser=require('body-parser');
const user=require('./routes/user.js');
const about_us=require('./routes/about_us.js');
const product=require('./routes/product.js')

var app=express();
app.listen(3000);

app.use(express.static('./static'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/user',user);
app.use('/about_us',about_us);
app.use('/product',product);
